import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChange
} from "@angular/core";
import { Subject } from "rxjs";
import { distinctUntilChanged, debounceTime } from "rxjs/operators";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnChanges {
  private searchDebounce = 300;
  searchSubject = new Subject<string>();

  @ViewChild("searchBar", { static: true }) searchBar: ElementRef;
  @Input() placeholder?: string;
  @Input() clear?: boolean;
  @Output() onSearch = this.searchSubject.pipe(
    distinctUntilChanged(),
    debounceTime(this.searchDebounce)
  );
  @Output() onFocus = new EventEmitter<string>();

  doSearch() {
    this.searchSubject.next(this.query);
  }

  doFocus() {
    this.onFocus.emit(this.query);
  }

  focus() {
    this.searchBar.nativeElement.focus();
  }

  get query() {
    return this.searchBar.nativeElement.value;
  }

  set query(value: string) {
    this.searchBar.nativeElement.value = value;
  }

  constructor() {}

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (let propName in changes) {
      if (propName === "clear" && changes[propName].currentValue === true) {
        this.query = "";
      }
    }
  }
}
