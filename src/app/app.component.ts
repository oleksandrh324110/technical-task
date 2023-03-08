import { Component } from '@angular/core'
import { SafeUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  matInput = localStorage.getItem('matInput') ?? ''
  qrCodeDownloadLink: SafeUrl = ''

  update() {
    localStorage.setItem('matInput', this.matInput)
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
