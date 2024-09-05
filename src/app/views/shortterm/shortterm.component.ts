import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shortterm',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './shortterm.component.html',
  styleUrl: './shortterm.component.css'
})
export class ShorttermComponent {
  //Variable donde guardo los textos que irán cambiando
  public content: string[] = ['Memoria a corto plazo', 'Cuando la información pasa a estar disponible por un tiempo indefinido, es cuando hablamos de memoria a largo plazo',
    'La memoria a corto plazo es la capacidad para almacenar, mantener y recuperar cierta cantidad de información durante un corto periodo de tiempo.'];
//Variable donde guardo las imágenes
  public allPhotos: string[][] = [["url(https://www.olympiabenefits.com/hubfs/Vega/Blog%20Pages/Psychology/What%20is%20memory.png)",
    "url(https://images.ctfassets.net/cnu0m8re1exe/uTkqQAbjpnnpceaY9UzLE/2d49aaee28ca31631c33a02ff89b437c/brainresearch.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill)",
    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ95HvxEmQ-GQBMSL48P-DpN445HLKgqG2EmJu57Fr8Ix4rw0mkf01iMh3Hew2gS3I9JI&usqp=CAU)"
  ],
  ["url(https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/1369847707_4085_memory-1.jpg?itok=aZRKeJXR)",
    "url(https://media.npr.org/assets/img/2023/08/07/gettyimages-1440469647-db0c65c135844b757df227afebfa240fd400630c.jpg)",
    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8a2YKUyrUrEEkYxECnP4zI3LXpfEhhEZhg&usqp=CAU)"
  ],
  ["url(https://mindworks.org/app/uploads/2023/06/Does-Meditation-Improve-memory.jpg)",
    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERe-RZMXEfeALxm-QfjABDm_b2ggQEBJdng&usqp=CAU)",
    "url(https://images.theconversation.com/files/171522/original/file-20170530-23699-itx0un.jpg?ixlib=rb-1.1.0&rect=0%2C181%2C2987%2C2163&q=45&auto=format&w=926&fit=clip)"
  ]]

  //booleano para el texto
  public showText: boolean = true;
  //contador para contar los clicks
  public click: number = 0;
  //declaro una variable para el texto que se mostrará al cargar la página
  public text: string = this.content[0];
  //declaro una variable con los valores para left
  public leftValues: string[][] = [['0%', '0%','0%'],['25%', '50%', '75%']];
  //declaro variable para asignar el valor de left inicial
  public left:string[]=this.leftValues[0];
  //declaro variable para asignar las imágenes iniciales
  public photos: string[] = this.allPhotos[0];

  //Mñetodo que gestiona los clicks para cambiar de imagen
  public onClick(index: number): void {
    this.click += index;
    if (this.click > 6) {
      this.click = 1;
    }
    else if (this.click < 1) {
      this.click = 6;
    }
    switch (this.click) {
      case 1:
        this.showText = false;
        this.left = this.leftValues[1];
        this.photos = this.allPhotos[1];
        break;
      case 2:
        this.showText = true;
        this.text = this.content[1];
        this.left = this.leftValues[0];
        break;
      case 3:
        this.showText = false;
        this.photos = this.allPhotos[0];
        this.left = this.leftValues[1];
        break;
      case 4:
        this.showText = true;
        this.text = this.content[2];
        this.left = this.leftValues[0];
        break;
      case 5:
        this.showText = false;
        this.photos = this.allPhotos[2];
        this.left = this.leftValues[1];
        break;
      case 6:
        this.showText = true;
        this.text = this.content[0];
        this.left = this.leftValues[0];
        break;
    }
  }
}

