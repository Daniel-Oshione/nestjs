import { Injectable } from '@nestjs/common';
import { STATUS_CODES } from 'http';

@Injectable()
export class AppService {
  getHello(): string {
    return `we are, in year ${new Date().getFullYear()} and month is ${new Date().getMonth()}th. The date is also ${new Date().getDate()}.`;
  }

  //to make posts
  async addProducts(){
     const productDetails = {
      item1: {
        id: 1,
        name: 'Shoe',
        price: '$50',
        color: 'black',
        isAvailable: 'true'
      },
      item2: {
        id: 2,
        name: 'Shoe',
        price: '$150',
        color: 'White',
        isAvailable: 'true'
      },
      item3: {
        id: 3,
        name: 'Shoe',
        price: '$60',
        color: 'gray',
        isAvailable: 'false'
      },
      item4: {
        id: 4,
        name: 'Shoe',
        price: '$20',
        color: 'orange',
        isAvailable: 'true'
      }
     }
     
     return {
      statusCode: 201,
      message: 'Products added!',
      goods: productDetails
     }
  }
}
