import "tailwindcss/tailwind.css";

export default function Feedback() {
  const pessoas = [
    {
      nome: "Joao",
      resumo:
        "Excelente trabalho na refatoração do código! As melhorias na arquitetura e na organização do projeto tornaram o código muito mais limpo e fácil de manter. A forma como você implementou a autenticação foi particularmente impressionante, garantindo não apenas segurança, mas também uma experiência de usuário suave.",
      foto: "/iconPessoa.png",
      rate: "/iconRate.png",
    },
    {
      nome: "Erica",
      resumo:
        "Excelente trabalho na refatoração do código! As melhorias na arquitetura e na organização do projeto tornaram o código muito mais limpo e fácil de manter. A forma como você implementou a autenticação foi particularmente impressionante, garantindo não apenas segurança, mas também uma experiência de usuário suave.",
      foto: "/iconPessoa3.png",
      rate: "/iconRate.png",
    },
    {
      nome: "Pedro",
      resumo:
        "Excelente trabalho na refatoração do código! As melhorias na arquitetura e na organização do projeto tornaram o código muito mais limpo e fácil de manter. A forma como você implementou a autenticação foi particularmente impressionante, garantindo não apenas segurança, mas também uma experiência de usuário suave.",
      foto: "iconPessoa2.png",
      rate: "/iconRate.png",
    },
  ];

  return (
    <div className="feedback-page bg-[#1E1E1E]">
      <div className="content max-w-[1500px] w-full mx-auto bg-[#1E1E1E] p-12">
        <div className="primeiro py-16">
          <div className="principal max-w-[1300px] w-full bg-[#D99C52] flex mx-auto flex-nowrap border border-black rounded-[6px_20px_20px_20px]">
            <div className="person flex flex-col justify-center items-center flex-nowrap w-[40%]">
              <img
                className="w-[179px] h-[217px] object-cover rounded-lg"
                src={pessoas[0].foto}
                alt=""
              />
              <h4>{pessoas[0].nome}</h4>
            </div>
            <div className="divisor flex items-center mx-auto border border-white h-[75%]"></div>
            <div className="personDescription flex flex-col items-start w-full mt-16 p-5 font-bold text-xl">
              <p>{pessoas[0].resumo}</p>
              <img src={pessoas[0].rate} alt="" />
            </div>
          </div>
        </div>

        <div className="secondContent flex max-w-[1500px] w-full">
          <div>
            {pessoas.map((pessoa, index) => (
              <div key={index} className="others flex max-w-[629px] w-full py-7">
                <div className="subContent w-full h-full bg-[#D99C52] flex border border-black rounded-[6px_20px_20px_20px]">
                  <div className="subPerson flex flex-col justify-center items-center w-[40%]">
                    <img
                      className="w-[99px] h-[98px] object-cover border border-gray-300 rounded-full"
                      src={pessoa.foto}
                      alt=""
                    />
                    <h4>{pessoa.nome}</h4>
                  </div>
                  <div className="divisor flex items-center mx-auto border border-white h-[75%]"></div>
                  <div className="subPersonDescription flex flex-col items-start w-full p-5 font-bold text-sm">
                    <p>{pessoa.resumo}</p>
                    <img src={pessoa.rate} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cadeira flex mx-auto">
            <img
              className="max-w-[421px] max-h-[612px]"
              src="./imgCadeira.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
