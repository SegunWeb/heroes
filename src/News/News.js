import React, {Component} from 'react'
import api from 'marvel-api'

// const style = {
//     textAlign: "center"
// };

const marvel = api.createClient({
    publicKey: 'f85fe59dc41dfe853b89ae261ea2e40f',
    privateKey: 'ac7266100edc7ca99b850292accee4058fff2760'
});



class News extends Component {

    state = {
        heroes: "",
        heroes2: [],
    };

    mapHeroResp = heroes => heroes.map(({name, description, id}) => ({name, description, id}));

    mapHeroResp2 = heroes2 => heroes2.map((i) => (i));
    componentDidMount() {
        marvel.characters.findAll()
            .then(res => this.setState({
                heroes: this.mapHeroResp(res.data),
                heroes2: this.mapHeroResp2(res.data)
            }))
    }

    renderHeroes = () => {
        const {heroes, heroes2} = this.state;
        console.log(heroes2);
        return heroes.map( hero => {
            const keys = Object.keys(hero);

            return keys.map(key => {
                const name = key;
                const value = hero[key];
                return (
                    <div>
                        <div>{name} -- {value}</div>
                    </div>
                );


                // const val = hero[key].path+'.'+hero[key].extension;


            })
        })
    };

    render() {
        const {heroes} = this.state;

        return(
            <div>
                { heroes.length === 0
                    ? <div>loader</div>
                    : this.renderHeroes()
                }
            </div>
        )
    }

};

export default News;


// fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150")
//     .then(response=> response.json())
//     .then(use => this.setState({
//         news: use,
//         // name: users.name,
//         // films: users.films
//     }))

//
// .then(res => this.setState({
//         news: res,
//         name: res.data[0].name,
//         img: res.data[0]["thumbnail"].path+"."+res.data[0]["thumbnail"].extension,
//     }))
// .fail(console.error)
// .done()
//
// componentDidMount() {
//     fetch("http://api.travelpayouts.com/v2/prices/latest?limit=10&show_to_affiliates=true&sorting=price&token=d2a01394836375a8529d1e68e532e5a0")
//         .then(response=> response.json())
//         .then(use => this.setState({
//             news: use,
//             // name: users.name,
//             // films: users.films
//         }))
// }