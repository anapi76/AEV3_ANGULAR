import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-longterm',
  standalone: true,
  imports: [],
  templateUrl: './longterm.component.html',
  styleUrl: './longterm.component.css'
})
export class LongtermComponent implements OnInit {
  //declaro en una variable las imágenes que voy a utilizar para el carrusel
  public photos: string[] = ["https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/1369847707_4085_memory-1.jpg?itok=aZRKeJXR",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8a2YKUyrUrEEkYxECnP4zI3LXpfEhhEZhg&usqp=CAU",
    "https://easyscienceforkids.com/wp-content/uploads/2018/04/Memory-facts-18-4-1-758x635.jpg"
  ];
  //declaro una variable vacía para la imagen que va a ir cambiando
  public image: string = '';
  //declaro el case inicial y una varible para asignar el valor actual
  public case: number = 0;
  public current: number = 0;

  //Método para inicializar el carrusel al cargar la página
  ngOnInit(): void {
    this.startCarousel();
  }
  //Método que implementa un intervalo para mostrar las fotos del carrusel
  public startCarousel() {
    setInterval(() => { this.carousel() }, 5000);
  }
  
  //método para el comportamiento del carrusel
  public carousel(): void {
    if (this.current > (this.photos.length) - 1) {
      this.current = 0;
    }
    else if (this.current < 0) {
      this.current = this.photos.length - 1;
    }
    this.image = this.photos[this.current];
    this.case = this.current;
    this.current++;
  }

}
