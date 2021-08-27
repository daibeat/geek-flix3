import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.less']
})
export class StorageComponent implements OnInit {

  constructor(private _storageService: LocalStorageService) { }

  ngOnInit(): void {

  }

}
