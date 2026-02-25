export interface Question {
  date: string;
  question: string;
  answer: string;
}

export interface ExamPeriod {
  period: string;
  questions: Question[];
}

export interface ExamResponse {
  gameId: string;
  exams: ExamPeriod[];
}