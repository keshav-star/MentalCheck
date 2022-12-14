import React from "react"
// import "./about.css";
const About = () => {
    return (
        <>

            <div class="container">
                <span>Welcome to <b>Psyc Chek</b>,</span> <br/>
                <p> My name is Keshav. I am a self-taught web developer having a keen interest in working in latest Techs and stacks for websites.
                </p>
                <center> <b> C++ Programmer || Web Developer || Enthusiastic </b>
                </center>

                <div class="port"><h2>Check my portfolio Here -- <a href="http://keshavsandhu.tk" target="_blank" rel="noreferrer">keshavsandhu.tk</a></h2>
                </div>

                <div>Check my other projects below:</div>

                <section>
                    <div class="card">
                        <h2>Todo List</h2>
                        <img src="./img/list.png" alt="" />
                        <div><a href="http://keshav-star.github.io/todolist" target="_blank" rel="noreferrer">visit page</a></div>
                    </div>
                    <div class="card">
                        <h2>Addict Adda</h2>
                        <img src="./img/addictadda.jpg" alt="" />
                        <div><a href="http://keshav-star.github.io/addictadda" target="_blank" rel="noreferrer">visit page</a></div>
                    </div>
                    <div class="card">
                        <h2>Expense Tracker</h2>
                        <img src="./img/expense.png" alt="" />
                        <div><a href="http://keshav-star.github.io/dgbook" target="_blank" rel="noreferrer">visit page</a></div>
                    </div>
                    <div class="card">
                        <h2>Tic Tac Toe</h2>
                        <img src="./img/tictacjpg.jpg" alt="" />
                        <div><a href="https://keshav-star.github.io/ZeroKatta/" target="_blank" rel="noreferrer">visit page</a></div>
                    </div>
                    <div class="card">
                        <h2>Dictionary</h2>
                        <img src="./img/dictionary.png" alt="" />
                        <div><a href="http://keshav-star.github.io/WordFind" target="_blank" rel="noreferrer">visit page</a></div>
                    </div>
                </section>
            </div>
        </>
    )
};

export default About;