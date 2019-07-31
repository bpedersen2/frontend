import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-sample-search",
  templateUrl: "./sample-search.component.html",
  styleUrls: ["./sample-search.component.scss"]
})
export class SampleSearchComponent implements OnInit {
  query: string;

  constructor(
    private store: Store<any>
  ) {}

  ngOnInit() {}

  textSearchChanged(query: string) {
    console.log(query);
    // this.store.dispatch ( new SampleSearchAction(query));
  }
}
