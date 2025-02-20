INSERT INTO CATEGORY (id, name) VALUES 
(1, 'html'),
(2, 'css'),
(3, 'javascript');

INSERT INTO Question (id, text, category_id) VALUES 
(1, 'Ef við værum að smíða vefsíðu og myndum vilja geta farið frá index.html yfir á about.html, hvað væri best að nota?', 1),
(2, 'Í <head> á vefjum setjum við <meta charset=\"utf-8\"> (eða það stafasett sem nota á), afhverju er það gert?', 1),
(3, 'Það sem við getum gert til að forrita aðgengilega vefi er', 1),
(4, 'Hvað er merkingarfræði í sambandi við námsefnið?', 1),

(5, 'Fyrir eftirfarandi HTML / for the following HTML:\n\n\n<div class=\"text\">\n  <h1 class=\"important text__title\">Halló heimur</p>\n</div>\n \n\nEr skilgreint CSS / there is defined CSS:\n\n\n.text {\n  font-size: 10px;\n  color: green;\n}\n\n.text .text__title {\n  font-size: 1.5em;\n}\n\n.important {\n  font-size: 2em;\n  color: red;\n}\n\n \n\nHvert af eftirfarandi er satt fyrir textann „Halló heimur“ eftir að búið er að reikna gildi?', 2),
(6, 'Ef við erum að nota nýtt gildi fyrir lit í CSS sem er ekki víst að sé stutt í öllum vöfrum, þá ættum við að', 2),
(7, 'Í verkefnum höfum við unnið með „containers“ og „items“ sem hugtök, hvað á það við?', 2),
(8, 'Þegar við notum flexbox hvað af eftirfarandi er satt? Gerið ráð fyrir að skjal sé lesið frá vinstri til hægri.', 2),


( 9, 'Hvað er skrifað út eftir að eftirfarandi kóði er keyrður?\n\nconst items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\nconst іtem = items\n  .map((i) => i * 2)\n  .filter(\n    (i) => i < 10\n  )\n  .find((i) => i > 6)\n\n\nconsole.log(item);', 3),
(10, 'Þegar við berum saman gildi í JavaScript ættum við alltaf að nota þrjú samasem merki (`===`) því að', 3),
(11, 'Þegar við notum `fetch` í JavaScript ætti ferlið við að sækja gögn að vera', 3);

INSERT INTO Answer(text, question_id, is_correct) VALUES

('<a href=\"about.html\">About</a>', 1, true),
('<form method=\"get\" action=\"about.html\"><button>About</button></form>', 1, false),
('<button to=\"about.html\">About</button>', 1, false),
('Allar jafn góðar / All equally good', 1, false),

('Þannig að stafir birtist rétt.', 2, true),
('Skilgreining sem visual studio verður að hafa þannig að prettier virki rétt.', 2,false),
('Skilgreining sem aXe krefur okkur um til að vefur verði aðgengilegur.', 2,false),
('Ekkert af þessu.',2,false),

('Allt af þessu', 3, true),
('Nota eingöngu lyklaborð við að skoða og nota vefinn.', 3, false),
('Merkja form á aðgengilegan hátt.', 3, false),
('Hafa tóman alt texta á myndum ef þær eru eingöngu til skrauts.',3,false),

('Hvert HTML element hefur einhverja skilgreinda merkingu—merkingarfræðilegt gildi—sem við þurfum að hafa í huga þegar við smíðum vefi.', 4, true),
('Hvert HTML tag hefur einhverja skilgreinda merkingu—merkingarfræðilegt gildi—sem við þurfum að hafa í huga þegar við smíðum vefi', 4, false),
('Hvert CSS eigindi hefur einhverja skilgreinda merkingu—merkingarfræðilegt gildi—sem við þurfum að hafa í huga þegar við smíðum vefi.', 4, false),
('Hver CSS selector hefur einhverja skilgreinda merkingu—merkingarfræðilegt gildi—sem við þurfum að hafa í huga þegar við smíðum vefi.', 4, false),

('font-size: 20px;, color: green;', 5, true),
('font-size: 15px;, color: red;', 5, false),
('font-size: 20px;, color: red;', 5, false),
('font-size: 15px;, color: green;', 5, false),

('Skilgreina fallback gildi á undan nýja gildinu sem væri notað í stað þess ef það er ekki stutt', 6, true),
('Skilgreina fallback gildi á eftir nýja gildinu sem væri notað í stað þess ef það er ekki stutt.', 6, false),
('Setja upp JavaScript virkni sem bendir notanda á að sækja nýjann vafra sem styður gildið.', 6, false),
('Þetta er ekki stutt í CSS.', 6, false),

('„Flex container“ og „flex items; „grid container“ og „grid items“: greinarmunur á foreldri og börnum þegar flexbox og CSS grid er notað.', 7, true),
('„Flex container“ og „flex items: greinarmunur á foreldri og börnum eingngu þegar flexbox er notað.', 7, false),
('„Grid container“ og „grid items“: greinarmunur á foreldri og börnum eingöngu þegar grid er notað.', 7, false),
('Hugtök sem eru notuð með `querySelectorAll`: „container“ er það element sem leitað er undir, „items“ það sem er skilað.', 7, false),

('Höfum skilgreinda tvo ása: aðalás og krossás sem eru hornréttir; sjálfgefin röðun er á aðalás frá vinstri til hægri.', 8, true),
('"Höfum skilgreinda tvo ása: aðalás og krossás sem eru samsíða; sjálfgefin röðun er á aðalás frá vinstri til hægri.', 8, false),
('Höfum skilgreinda tvo ása: aðalás og krossás sem eru hornréttir; sjálfgefin röðun er á krossás frá vinstri til hægri.', 8, false),
('Höfum skilgreinda tvo ása: aðalás og krossás sem eru samsíða; sjálfgefin röðun er á krossás frá vinstri til hægri.', 8, false),

('8', 9, true),
('[8]', 9, false),
('uncaught referenceerror: item is not defined', 9, false),
('undefined', 9, false),

('Þessi samanburður byrjar á að bera saman týpur gilda og kemst því framhjá type coercion sem gerist með samanburð með tveimur samasem merkjum.', 10, true),
('Við ættum alltaf að nota tvö samasem merki, ekki þrjú því þá byrjum við á að bera saman týpur gilda og komumst þannig framhjá type coercion.', 10, false),
('Þessi samanburður kemst framhjá truthy og falsy gildum og skilar eingöngu réttum niðurstöðum fyrir primitive gildi.', 10, false),

('Búið til `fetch` request kall sem tilgreinir að minnsta kosti URL; villuathugun á kalli og svari með tilliti til HTTP; gögn sótt í response með villuathugun.', 11, true),
('Búið til `fetch` request kall sem verður að tilgreina URL, HTTP aðferð og stöðukóða; villuathugun á kalli og svari með tilliti til HTTP; gögn sótt í response með villuathugun.', 11, false),
('Búið til `fetch` request kall sem tilgreinir að minnsta kosti URL; villuathugun á kalli og svari með tilliti til URL; gögn sótt í response.', 11, false);









