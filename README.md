# AEV3_ANGULAR
ACTIVIDAD EVALUABLE, componentes, vistas, eventos y directivas en Angular.
### Ejercicio 1. 
Crea los siguientes componentes e impleméntalos a partir de la plantilla seleccionada: header, banner, footer. En el componente header ubicarás los enlaces a cada una de las vistas de la aplicación. 
### Ejercicio 2. 
Crea una vista ‘home’ e implementa, a partir de las directivas y eventos que conoces para que al cargarse esta vista aparezcan en pantalla seis imágenes. Cuando se pulse sobre cualquiera de las seis primeras imágenes, esta se agrandará ocupando el espacio de las seis primeras. Para cada imagen, se mostrará su contenido de texto asociado. Cuando se pulse sobre la imagen agrandada, se mostrará, también agrandada, su imagen asociada correspondiente. Independientemente de qué imagen se haya pulsado, se mostrará el mismo contenido de texto.
### Ejercicio 3. 
Crea una vista ‘longterm e implementa, a partir de las directivas, estructuras de control de flujo y eventos que conoces para que al cargarse esta vista se muestre un carrusel cíclico que permita visualizar de forma ordenada cada una de las tres imágenes y, para cada una de ellas, un párrafo. La información contenida en el texto “¿Qué es la memoria a largo plazo?”. Nota: emplear función de angular ngOnInit().
### Ejercicio 4. 
Crea una vista ‘shortterm’ e implementa, a partir de las directivas, estructuras de control de flujo y eventos que conoces para que al cargarse esta vista se muestre únicamente 3 imágenes y un texto. Al pulsar sobre el botón Siguiente, las imágenes se desplazarán, cambiarán y el texto desaparecerá. Si se vuelve a pulsar sobre Siguiente, las imágenes volverán al inicio y se mostrará el texto. Al volver a pulsar sobre Siguiente, las imágenes se desplazarán nuevamente, cambiarán y el texto desaparecerá. Al volver a pulsar sobre Siguiente, las imágenes volverán al inicio y se mostrará de nuevo el texto. Al volver a pulsar sobre Siguiente las imágenes se desplazarán nuevamente, cambiarán y el texto desaparecerá. Al volver a pulsar sobre Siguiente, las imágenes volverán al inicio y se mostrará de nuevo el texto. Al volver a pulsar empieza todo el ciclo. Si en cambio se pulsa Anterior, se irán mostrando los datos en la dirección contraria.
### Ejercicio 5. 
Crea una vista ‘game’ e implementa, a partir de las directivas y eventos que conoces el siguiente juego: Al cargarse la vista “game” se mostrará un título de primer nivel con la inscripción “Let’s Play!” y debajo un tablero de juego compuesto por 4 filas y 4 columnas de cuadriculas azules. El juego comenzará tras hacer click el usuario sobre el título de primer nivel. Las cuadrículas del tablero pasarán a ser de color "red", "yellow", "green" y "purple". Durante un periodo de tiempo de 3 segundos el color de las cuadrículas irá intercambiándose aleatoriamente cada 0,1 segundos. Al detenerse el intercambio de posiciones, transcurrirán dos segundos más, durante los cuales el usuario deberá memorizar la posición de las cuadrículas y transcurrido ese tiempo, las cuadriculas volverán a intercambiar sus colores de manera aleatoria a intervalos de 0.1 segundo. Al detenerse el intercambio de posiciones, el usuario deberá ordenar las posiciones de los colores, haciendo click –es decir, si hace click en una cuadrícula y seguidamente en otra, ambas intercambiarán sus colores. Cuando pulse sobre el título ‘Check!’, si el usuario acierta a ubicar los colores en las posiciones correspondientes, se pasará de nivel. De lo contrario podrá volver a intentar ordenarlos. Si el usuario comete tres fallos acumulables durante los tres niveles que dura el juego, se acabará el juego, escondiéndose el tablero y apareciendo la inscripción ‘Game Over!’.Para el segundo nivel, el juego contará con nueve cuadrículas, con los colores: "red", "yellow", "green", "purple", "blue", "violet", "orange", "grey", "black". Para el tercer nivel, el juego contará con dieciséis cuadrículas, con los colores: "red", "yellow", "green", "purple", "blue", "violet", "orange", "grey", "black", "silver", "fuchsia", "lime", "navy", "aqua", "chartreuse", "cornflowerblue".
