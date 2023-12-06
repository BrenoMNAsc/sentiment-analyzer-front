import axios from "axios";

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000'
});

export default function SentimentAnalyzer(text_){
    return api.get('/predict', {params: {'text': text_}}).then((response) => {
        if(response.status !== 200) {
            console.error("Ocorreu um erro com a solicitação GET");
            return 0;
        }
        console.log(response.data.split(':')[1])
        return parseInt(response.data.split(':')[1]);
    }).catch((error) => {
        console.error(`Ocorreu um erro com a solicitação GET: ${error}`);
        return 0;
    });
}