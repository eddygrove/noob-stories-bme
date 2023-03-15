function Hero(props) {
  console.log(props);
  //   detta innebär att: props = {text: 'MyHero’, myOtherKey: '33'}, hämtad från App.jsx
  const { name, text, myOtherKey } = props;
  console.log(text);
  console.log(name);
  console.log(myOtherKey);

  return (
    <h1>
      {/* {props.text} {props.myOtherKey} här kan vi ta bort props. eftersom vi har destructured keysen ur props */}
      {text} {myOtherKey} {name}
    </h1>
  );
}

export default Hero;
