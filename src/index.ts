import './style.css';
import data from './data.json';
 interface Store {
  type:                string;
  response:            Response;
  processOnBackground: boolean;
}

 interface Response {
  getDeliveryOptionsResponse: GetDeliveryOptionsResponse;
}

 interface GetDeliveryOptionsResponse {
  status:          string;
  deliveryOptions: DeliveryOptions;
}

 interface DeliveryOptions {
  deliveryOption: DeliveryOption[];
}

 interface DeliveryOption {
  identifier:               number;
  code:                     string;
  name:                     string;
  directedSendSystemOption: boolean;
}

const {response: {getDeliveryOptionsResponse: {deliveryOptions}}}: Store = data;
console.log(deliveryOptions);