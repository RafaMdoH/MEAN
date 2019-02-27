import { Question } from '../question/question.model';

export class User {
    constructor(
        public firstName: string,
        public lastName: string,
    ){}
}

export class Answer{
    constructor(
        public description: string,
        public quetion: Question,
        public createdAt?: Date,
        public user?: User
    ){}
}