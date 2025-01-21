import { Component, signal } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html'
})
export class AppComponent {
  imageUrl = signal<string>("");

  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt
    });

    if(image){
      this.imageUrl.set(`data:image/jpeg;base64,${image.base64String}`)
    }
  };
}
