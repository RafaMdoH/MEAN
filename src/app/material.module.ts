import { NgModule } from '@angular/core';
import {MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule} from '@angular/material';

const modules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule
];

@NgModule({
  
    imports: modules,
    exports: modules
  })

  export class MaterialModule { }