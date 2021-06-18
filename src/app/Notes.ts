export default interface Notes {
  title: string;
  creationdate: Date;
  todos: string[];
  textContent: string[];
  color: string;
  [keys: string]: any;
}
