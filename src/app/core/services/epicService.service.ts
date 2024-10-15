import { Injectable } from '@angular/core';
import { Hero } from '../model/epicData';

@Injectable({
  providedIn: 'root'
})
export class EpicService {

  private storageKey = 'epicData';

  constructor() { }

  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }
  
  setData(data: Hero[]): void {
    if (this.isLocalStorageAvailable()) {
        const jsonData = JSON.stringify(data);
        localStorage.setItem(this.storageKey, jsonData);
    }

  }

  getData(): any {
    if (this.isLocalStorageAvailable()) {
        const jsonData = localStorage.getItem(this.storageKey);
        if (jsonData) {
        return JSON.parse(jsonData);
        }
    }
        return null;
  }

  updateData(newData: any): void {
    const currentData = this.getData() || {};
    const updatedData = { ...currentData, ...newData };
    this.setData(updatedData);
  }

  clearData(): void {
    localStorage.removeItem(this.storageKey);
  }
}