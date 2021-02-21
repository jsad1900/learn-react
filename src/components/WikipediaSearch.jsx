import React, { Component } from 'react';
import logo from "./logo-wikipedia.svg";
import './style.scss';
import CardList from './cardList';


class WikipediaSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSearch: [],
            searchField: '',
            isLoaded: false
        }
    };
    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value });
    }
    addUrlSearch = (e) => {
        console.log(this.state.searchField);
        fetch(`https://vi.wikipedia.org//w/api.php?origin=*&action=query&format=json&list=search&utf8=1&srsearch=${this.state.searchField}`)
            .then(Response => Response.json())
            .then(
                data => {
                    console.log(data.query.search);
                    this.setState({
                        isLoaded: true,
                        dataSearch: data.query.search
                    })

                }
            )
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div className="wiki-search">
                <div className="logo-wiki">
                    <img src={logo} alt="" />
                </div>
                <h1 className="title-page">Tìm kiếm wikipedia</h1>
                <div className="search">
                    <input onChange={this.onSearchChange} type="text" id="textSearch" />
                    <button onClick={this.addUrlSearch}>Tìm kiếm</button>
                </div>
                <p className="author">Author: Ngọc Danh || Create: 21/02/2021 || React JS</p>
                <CardList dataSearch={this.state.dataSearch} />
            </div>
        );
    };
}

export default WikipediaSearch;