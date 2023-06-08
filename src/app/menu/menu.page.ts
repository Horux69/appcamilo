import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;

  paginas = [
    {
      titulo: 'Inicio',
      url: '/menu/inicio',
      icon: 'Home'
    }
  ]

  constructor(private alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i: number){
    this.indiceSeleccionado = i;
  }

  async salir(){
    const alert= await this.alertController.create({
      header: 'Salir',
      message: '¿Quieres salir?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {

          }
        },{
          text: 'Aceptar',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.router.navigate(['../login']);
          }
        }
      ]
    });

    await alert.present();
  }

}
