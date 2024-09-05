import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  // Array con los textos que voy a cambiar
  public titles: string[] = ["Let's play!", 'Game Over!', 'You win!'];
  // Array con los colores de cada juego
  public colors: string[][][] = [[['red', 'yellow'], ['green', 'purple']],
  [['red', 'yellow', 'green'], ['purple', 'blue', 'violet'], ['orange', 'grey', 'black']],
  [['red', 'yellow', 'green', 'purple'], ['blue', 'violet', 'orange', 'grey'], ['black', 'silver', 'fuchsia', 'lime'], ['navy', 'aqua', 'chartreuse', 'cornflowerblue']]];
  public colorsFlat: string[] = [];
  //declaro los contadores que necesito
  public click: number = 0;
  public errorCounter: number = 0;
  public current: number = 0;
  //Variable para guardar las filas y columnas que necesitaré para generar la plantilla del juego activo
  public currentColors: string[][] = this.colors[this.current];
  public currentGrid: number[] = [this.currentColors[0].length, this.currentColors[0].length];
  // Plantilla que se usará para generar la cuadrícula del juego activo
  public currentGame: string[][] = [];
  // Declaro la variable para title para cambiar el texto según necesite
  public title: string = this.titles[0];
  // Declaro las variables booleanas
  public gameStart: boolean = false;
  public gameFinish: boolean = false;
  public checkArrays: boolean = true;
  //Declaro la variables vacías para guardar los colores seleccionados
  public colorsStop: string[][] = [];
  // Declaro las variables vacías de las posiciones de las celdas que se van a intercambiar para cambiar los colores
  public position1: number[] = [];
  public position2: number[] = [];
  public saveColor: string = '';
  //declaro una variable para asignar la función setInterval y poder pararla
  public interval: any;
  public j: number = 0;

  //Método que genera la cuadrícula del primer juego al cargar la página
  ngOnInit(): void {
    this.generateGrid();
  }

  //Método para crear la cuadríacula del juego según las filas y las columnas de cada nivel
  public generateGrid(): void {
    this.currentColors.map((element, i) => {
      this.currentGame[i] = [];
      element.map((element, j) => {
        this.currentGame[i][j] = '';
      })
    })
  }

  // Método para inicializar el juego
  public startGame(): void {
    this.gameStart = true;
    this.interval = setInterval(() => {
      this.changeColors();
    }, 100);
    setTimeout(() => {
      this.colorsStop = structuredClone(this.currentColors);
      clearInterval(this.interval);
    }, 3000);
    setTimeout(() => {
      this.interval = setInterval(() => {
        this.changeColors();
      }, 100)
    }, 5000);
    setTimeout(() => {
      clearInterval(this.interval);
    }, 8000);
  }

  public changeColors(): void {
    this.randomColors();
    this.currentColors = this.currentGame[0].map((element, i) =>
      this.currentGame[0].map((element, j) =>
        this.colorsFlat[i * this.currentGame[0].length + j]
      )
    );
  }

  //Método para generar un array de colores aleatorios
  public randomColors(): void {
    this.colorsFlat = this.currentColors.flat();
    for (let i = this.colorsFlat.length - 1; i > 0; i--) {
      this.j = Math.floor(Math.random() * (i + 1));
      [this.colorsFlat[i], this.colorsFlat[this.j]] = [this.colorsFlat[this.j], this.colorsFlat[i]];
    }
  }

  //Método para guardar la posición de las 2 celdas que queremos intercambiar
  public cellPosition(i: number, j: number): void {
    if (this.click === 0) {
      this.position1 = [i, j];
      this.click++;
    }
    else if (this.click === 1) {
      this.position2 = [i, j];
      this.changePosition(this.position1, this.position2);
      this.click = 0;
    }
  }

  //Método para intercambiar las posiciones de los colores
  public changePosition(pos1: number[], pos2: number[]): void {
    this.saveColor = this.currentColors[pos1[0]][pos1[1]];
    this.currentColors[pos1[0]][pos1[1]] = this.currentColors[pos2[0]][pos2[1]];
    this.currentColors[pos2[0]][pos2[1]] = this.saveColor;
  }

  //Método para comprobar si los dos arrays son inguales y getionar errores y aciertos
  public check(): void {
    this.checkArrays = this.currentColors.every((row, i) =>
      row.every((color, j) => color === this.colorsStop[i][j])
    );
    if (!this.checkArrays) {
      this.errorCounter++;
      if (this.errorCounter < 3) {
        alert('Vuelve a intentarlo');
        this.checkArrays = true;
      }
      else if (this.errorCounter === 3) {
        this.gameFinish = true;
        this.title = this.titles[1];
      }
    } else {
      this.current++;
      if (this.current < 3) {
        this.currentColors = this.colors[this.current];
        this.currentGrid = [this.currentColors[0].length, this.currentColors[0].length];
        this.generateGrid();
        this.startGame();
      }
      else if (this.current === 3) {
        this.gameFinish = true;
        this.title = this.titles[2];
      }
    }
  }
}

