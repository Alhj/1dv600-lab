class book {
    constructor(id,title,author,gener,publish,date,price,descriton,test) {
        this.id = id
        this.title = title
        this.author = author
        this.gener = gener
        this.publish = publish
        this.date = date
        this.price = price
        this.descriton = descriton
        this.place = test
    }
    book() {
        let book = {
            id: this.id,
            title: this.title,
            author: this.author,
            gener: this.gener,
            publish: this.publish,
            date: this.date,
            price: this.price,
            descriton: this.descriton
        }  
      }
}
module.exports ={ book
}