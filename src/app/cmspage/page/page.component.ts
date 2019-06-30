import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CmspageService } from '../cmspage.service';
import { Page } from '../page';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, AfterViewInit {
  @ViewChild('abc1') public abccccc: ElementRef;
  page: Page;
  name: string;
  error: {};

  constructor(
    private route: ActivatedRoute,
    private cmspageService: CmspageService
    ) { }

  ngOnInit() {
    console.log('this.name', this.name);
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cmspageService.getPage(params.get('slug'))
      )
    ).subscribe(
      (data: Page) => this.page = data,
      error => this.error = error
    );
  }
  ngAfterViewInit() {
//this.abccccc.nativeElement.focus();
// console.log('this.abccccc', this.abccccc);
  }
  public test(abc) {
  console.log('abc', abc);
}

}
