import "./about-us.css";

export const AboutUs = () => {
  return (
    <>
      <div className="about-hero">
        <h1>
          Apie mus <br /> Specializuota žiemos sporto įrangos parduotuvė,
          kurioje rasite tiek naujas, tiek naudotas kalnų slides, snieglentes,
          batus bei kitą reikalingą inventorių.
        </h1>
      </div>

      {/* about-section */}
      <div className="about-section">
        <div className="about-section__image"></div>
        <div className="about-section__text">
          <p className="about-section__caption">
            MODERNI ĮRANGA SLIDŽIŲ IR SNIEGLENČIŲ REMONTUI BEI RESTAURAVIMUI.
          </p>
          <p className="about-section__content">
            Mūsų servisas naudoja moderniausią įrangą. Patyrusių specialistų
            komanda pasirūpins, kad jūsų įranga būtų tinkamai prižiūrėta ir
            paruošta sezonui.
          </p>
        </div>
      </div>

      {/* about-goal */}

      <div className="about-goal">
        <div className="about-goal__left">
          <p className="about-goal__caption">TIKSLAS</p>
        </div>
        <div className="about-goal__right">
          <h3>
            Mūsų parduotuvėje visada siekiame užtikrinti kokybę, patikimumą ir
            prieinamumą.
          </h3>
          <p>
            Mūsų pagrindinis tikslas - užtikrinti, kad kiekvienas žiemos sporto
            entuziastas, nesvarbu, ar pradedantysis, ar profesionalas, rastų
            tinkamą įrangą padėsiančią mėgautis slidinėjimu ar snieglenčių
            sportu kalnuose.
          </p>
          <p>
            Siekdami aukščiausios kokybės ir prieinamų kainų, siūlome platų
            asortimentą, kuris atitinka įvairių poreikių vartotojus. Mūsų
            komanda, susidedanti iš entuziastingų ir patyrusių žiemos sporto
            specialistų visuomet pasiruošusi padėti išsirinkti tinkamiausią
            įrangą ir atsakyti į visus jūsų klausimus.
          </p>
        </div>
      </div>

      {/* about-rental */}
      <div className="about-rental">
        <div className="about-rental__left">
          <h3>Nuoma</h3>
          <p>
            Siūlome patogią ir greitą žiemos sporto įrangos nuomą. Siūlome
            lanksčius nuomos laikotarpius ir konkurencingas kainas, kad
            galėtumėte mėgautis žiemos pramogomis be rūpesčių dėl įrangos. Visi
            mūsų nuomojami produktai yra kruopščiai prižiūrimi ir paruošti
            naudojimui, kad jūsų patirtis ant sniego būtų kuo malonesnė!
          </p>
          <p>
            Norėdami gauti asmeninį pasiūlymą, užpildykite formą apačioje, ir
            mes susisieksime su jumis bei padėsime išsirinkti geriausiai jūsų
            poreikius atitinkančią įrangą.
          </p>
        </div>
        <div className="about-rental__right"></div>
      </div>

      {/* footer */}
      <footer className="footer">
        <div>
          <h3>Bendri</h3>
          <ul>
            <li>Pradžia</li>
            <li>Parduotuvė</li>
            <li>Nuoma</li>
            <li>Servisas</li>
            <li>Apie Mus</li>
            <li>Krepšelis</li>
          </ul>
        </div>

        <div>
          <h3>Kontaktai</h3>
          <p>Birbynių g. 4, Vilnius</p>
          <p>info@sniegokalnas.lt</p>
          <p>+37067906984</p>
        </div>

        <div>
          <h3>Darbo laikas</h3>
          <p>
            <strong>Nuo kovo 22d:</strong>
            <br />
            Dirbame tik pagal susitarimą
          </p>
          <ul>
            <li>PIRMADIENIS: NEDIRBAME</li>
            <li>ANTRADIENIS: NEDIRBAME</li>
            <li>TREČIADIENIS: NEDIRBAME</li>
            <li>KETVIRTADIENIS: NEDIRBAME</li>
            <li>PENKTADIENIS: NEDIRBAME</li>
            <li>ŠEŠTADIENIS: NEDIRBAME</li>
            <li>SEKMADIENIS: NEDIRBAME</li>
          </ul>
        </div>

        <small>2025 © SniegoKalnas.lt. Visos teisės saugomos.</small>
      </footer>
    </>
  );
};
