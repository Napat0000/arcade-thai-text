namespace SpriteKind {
    export const Text = SpriteKind.create()
}
function Setup_thai_text () {
    Texttemplate = "กขคฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮะาอิอีอึอือุอูเแโใไอัอ็อ์อ่อ้อ๊อ๋อํอำๆฯ"
    Texttemplate_list = []
    for (let index = 0; index <= Texttemplate.length - 1; index++) {
        if (index < 44) {
            Texttemplate_list.push(Texttemplate.charAt(index))
        } else {
            if (Texttemplate.charAt(index) != "อ") {
                Texttemplate_list.push(Texttemplate.charAt(index))
            }
        }
    }
    for (let value of Texttemplate_list) {
    	
    }
}
let Texttemplate_list: string[] = []
let Texttemplate = ""
Setup_thai_text()
