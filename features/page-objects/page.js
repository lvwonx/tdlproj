export class Page {
    get welcomeMessage() { return $(".logged-in"); }
    get showedEmail() { return $(".box-information p"); }
}

export default new Page();