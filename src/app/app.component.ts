import { Component } from "@angular/core";
import { Collection } from "./models/collection.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  collectionsArray = [];
  collectionFormValues = new Collection("", []);

  constructor() {
    chrome.storage.sync.get(["collections"], (result) => {
      if (typeof result.collections !== "undefined") {
        this.collectionsArray = result.collections;
      }
      console.log(this.collectionsArray);
    });
  }

  addCollection() {
    this.collectionsArray.push(
      new Collection(
        this.collectionFormValues.collectionName,
        this.collectionFormValues.urlArr
      )
    );
  }

  addLink() {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      this.collectionsArray.push(tabs[0].url);
      console.log(this.collectionsArray);
      chrome.storage.sync.set({ collections: [] }, () => {
        console.log("Set complete" + this.collectionsArray);
      });
    });
  }
}
