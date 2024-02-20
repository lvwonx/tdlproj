export class Page {
    get welcomeMessage() { return $(".logged-in"); }
    get showedEmail() { return $(".box.box-information .box-content"); }
}

export default new Page();