export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","icones/categorias_ingredientes/acucares_e_adocantes.png","icones/categorias_ingredientes/doces_e_guloseimas.png","icones/categorias_ingredientes/farinhas_e_fermentos.png","icones/categorias_ingredientes/frutas_frescas.png","icones/categorias_ingredientes/frutas_secas.png","icones/categorias_ingredientes/graos_cerais_e_leguminosas.png","icones/categorias_ingredientes/hortalicas_e_verduras.png","icones/categorias_ingredientes/laticinios_e_ovos.png","icones/categorias_ingredientes/oleos_gorduras_e_vinagres.png","icones/categorias_ingredientes/paes_e_massas.png","icones/categorias_ingredientes/proteinas_animais.png","icones/categorias_ingredientes/temperos_e_especiarias.png","icones/close.svg","icones/registered.png","imagens/alura-cook-logo.svg","imagens/footer.png","imagens/header.png","imagens/receitas/alho_assado.png","imagens/receitas/arroz_de_alho.png","imagens/receitas/bacalhau_com_chips_de_alho.png","imagens/receitas/creme_de_galinha.png","imagens/receitas/macarrao_de_alho_e_oleo.png","imagens/receitas/manteiga_com_tomilho_e_alho.png","imagens/receitas/milkshake_de_chocolate.png","imagens/receitas/mousse_de_chocolate.png","imagens/receitas/panqueca.png","imagens/receitas/pao_de_alho.png","imagens/receitas/pasta_de_alho_assado.png","imagens/receitas/pate_de_alho_assado.png","imagens/receitas/tortei.png","imagens/textura-marmore.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-5a9dea50.js","js":["start-5a9dea50.js","chunks/index-472f31ff.js","chunks/index-9ad4a0e1.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "receitas",
				pattern: /^\/receitas\/?$/,
				names: [],
				types: [],
				path: "/receitas",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
