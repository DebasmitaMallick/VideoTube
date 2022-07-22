export class NavElements{

    navEle: { id: number; link: string; icon: string; category: string; }[] = [
      {
        id: 0,
        link: '/',
        icon: 'assets/images/icons/home.png',
        category:'Home'
      },
      {
        id: 1,
        link: '/category',
        icon: 'assets/images/icons/trending.png',
        category:'Business'
      },
      {
        id: 2,
        link: '/category',
        icon: 'assets/images/icons/history.png',
        category:'Sports'
      },
      {
        id: 3,
        link: '/category',
        icon: 'assets/images/icons/home.png',
        category:'Education'
      },
      {
        id: 4,
        link: '/category',
        icon: 'assets/images/icons/trending.png',
        category:'Social'
      },
      {
        id: 5,
        link: '/category',
        icon: 'assets/images/icons/history.png',
        category:'Astrology'
      },
      {
        id: 6,
        link: '/category',
        icon: 'assets/images/icons/home.png',
        category:'Technology'
      },
      {
        id: 7,
        link: '/category',
        icon: 'assets/images/icons/trending.png',
        category:'Automobile'
      },
      {
        id: 8,
        link: '/category',
        icon: 'assets/images/icons/history.png',
        category:'Fashion'
      }
    ];

    constructor(){
    }

    addNewCategory(newCategory: string){
      this.navEle.push({
        id: this.navEle[this.navEle.length - 1].id+1,
        link: '/category',
        icon: 'assets/images/icons/history.png',
        category: newCategory
      })
    }

    getCategory(categoryId: number){
      let category: string | undefined;
      for(let i=0; i<this.navEle.length; i++){
        if(this.navEle[i].id === categoryId){
          category = this.navEle[i].category;
          break;
        }
      }
      return category;
    }
    
}