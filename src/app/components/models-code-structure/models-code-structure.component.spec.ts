import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsCodeStructureComponent } from './models-code-structure.component';

describe('ModelsCodeStructureComponent', () => {
  let component: ModelsCodeStructureComponent;
  let fixture: ComponentFixture<ModelsCodeStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelsCodeStructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelsCodeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
