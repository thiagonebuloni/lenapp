export interface Card {
    id: number;
    title: string;
    text: string;
    image: string;
    button:
    {
        button1:
        {
            value: string;
            url: string;
        },
        button2:
        {
            value: string;
            url: string;
        }
    }
}