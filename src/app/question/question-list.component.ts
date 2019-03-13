import { Component } from '@angular/core';
import { Question } from './question.model';

const q = new Question(
    '¿Cómo reutilizo un componente en angular',
    'Tego una duda ......',
    new Date(),
    'devicon-angularjs-plain'
    // 'none'
)

@Component ({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styles: [`
        i {
            font-size: 40px;
        }

        i.help{
            width: 40px !important;
            height: 40px !important;
            padding: 0 !important;
            font-size: 40px !important;
        }

        .add-question {
            position: fixed;
            bottom: 30px;
            right: 30px;
            font-size: 24px;
        }
    `]
})

export class QuestionListComponent {
    questions: Question [] = new Array(10).fill(q);
}