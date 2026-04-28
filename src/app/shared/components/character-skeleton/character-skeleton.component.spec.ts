import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSkeletonComponent } from './character-skeleton.component';

describe('CharacterSkeletonComponent', () => {
  let component: CharacterSkeletonComponent;
  let fixture: ComponentFixture<CharacterSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
