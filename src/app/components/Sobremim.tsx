const Sobremim = () => {
    return (
      <section id="sobremim" className="bg-gray-900 text-white h-screen flex items-center justify-center">
        <div className="text-center px-5">
          <img
            src="./Ranna.jpg" // A imagem deve estar na pasta public
            alt="Minha foto"
            className="w-36 h-36 mb-6 md:mb-0 md:mr-12 rounded-full overflow-hidden border-4 border-white shadow-lg"
          />
      
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-4">Sobre mim</h1>
          <div className="max-w-2xl text-center md:text-left">
          <p className="text-lg leading-relaxed">
          Olá me chamo Ranna! Desde cedo, sempre tive curiosidade em entender como as coisas funcionam. Com o tempo, descobri na programação de sistemas uma forma de transformar essa curiosidade em soluções reais. Hoje, atuo como programadora de sistemas, desenvolvendo aplicações que otimizam processos, facilitam rotinas e geram impacto positivo no dia a dia das pessoas.

Acredito que a tecnologia deve ser intuitiva, eficiente e centrada no usuário. Por isso, cada linha de código que escrevo é pensada com atenção aos detalhes, à funcionalidade e à experiência final. Trabalho com foco, comprometimento e paixão, buscando sempre evoluir junto com os desafios que cada projeto propõe.
          </p>
        </div>
          </div>
      </section>
    );
  };
  
  export default Sobremim;
  