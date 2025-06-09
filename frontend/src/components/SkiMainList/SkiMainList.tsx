import { useNavigate } from "react-router-dom";
import "./ski-main-list.css";

export const SkiMainList = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/rent");
  };

  const handleClicktoAboutUs = () => {
    navigate("/about-us");
  };

  const handleClickServise = () => {
    navigate("/servisas");
  };

  return (
    <>
      <div className="hero">
        <h1>Leiskitės į nuotykius su geriausiais pasiūlymais - tik pas mus!</h1>
        <button className="rental-hero__button" onClick={handleClicktoAboutUs}>
          APIE MUS
        </button>
      </div>

      {/* why-choose-us */}

      <div className="why-choose-us">
        <div className="why-choose-us__image"></div>
        <div className="why-choose-us__content">
          <h2>Kodėl verta rinktis mus?</h2>
          <p>
            Mūsų tikslas - Kokybė. Tai nėra tik siekis, mes tuo gyvename diena
            iš dienos. Savo sukauptos patirties dėka, padėsime išsirinkti būtent
            jums tinkamiausią slidinėjimo inventorių.
          </p>
          <p>
            Mūsų ekspertai, nuolat tobulinantys savo žinias ir sekantys
            naujausias tendencijas, yra pasirengę atsakyti į visus jūsų
            klausimus ir suteikti profesionalią konsultaciją. Mums rūpi ne tik
            parduoti produktą, bet ir užtikrinti, kad jis atitiktų jūsų
            lūkesčius ir leistų mėgautis kiekviena akimirka ant sniego.
          </p>
        </div>
      </div>

      {/* advantages */}

      <div className="advantages">
        <div className="advantage advantage--quality">
          <h3>Kokybės garantija</h3>
          <p>
            Aukščiausios kokybės slidės ir aksesuarai, atitinkantys jūsų
            poreikius bei užtikrinantys ilgaamžiškumą ir patikimumą.
          </p>
        </div>
        <div className="advantage advantage--service">
          <h3>Slidžių tvarkymo servisas</h3>
          <p>
            Profesionalus slidžių priežiūros ir remonto servisas, užtikrinantis,
            kad jūsų slidės visada būtų paruoštos geriausiam pasirodymui.
          </p>
        </div>
        <div className="advantage advantage--assortment">
          <h3>Platus asortimentas</h3>
          <p>
            Didelis slidžių, snieglenčių ir susijusių prekių pasirinkimas,
            pritaikytas įvairiems stiliams, lygiams ir poreikiams.
          </p>
        </div>
      </div>

      {/*rental-hero*/}
      <div className="rental-hero">
        <h1>Kokybiškos slidinėjimo įrangos nuoma</h1>
        <p>
          Mes siūlome platų slidinėjimo įrangos nuomos pasirinkimą visiems jūsų
          poreikiams. Nesvarbu, ar esate pradedantysis, ar patyręs profesionalas
          - pas mus rasite tinkamą inventorių, kad galėtumėte mėgautis žiemos
          pramogomis.
        </p>
        <button className="rental-hero__button" onClick={handleClick}>
          NUOMOTIS
        </button>
      </div>

      {/*service-section*/}
      <div className="service-section">
        <div className="service-section__content">
          <h2>
            Profesionalus slidžių ir snieglenčių servisas — aukščiausiam
            našumui!
          </h2>
          <p>
            Mes siūlome visapusišką slidžių ir snieglenčių priežiūrą, kad jūsų
            įranga visada būtų paruošta geriausiems žiemos nuotykiams. Atliekame
            slystamojo paviršiaus šlifavimą, užtikrinant lygų ir lengvai
            slystantį paviršių. Taip pat galandame briaunas, kad pagerintume
            sukibimą ir tikslumą. Prireikus, pritaikome specialią struktūrą
            slydimo paviršiui, kad jis geriau atitiktų konkrečias sniego
            sąlygas. Be to, vašuoajame ir poliruojame įrangą, kad ji tarnautų
            ilgiau ir būtų paruošta efektyviai slysti bet kokiomis sąlygomis.
          </p>
          <button
            className="service-section__button"
            onClick={handleClickServise}
          >
            SERVISAS
          </button>
        </div>
        <div className="service-section__image"></div>
      </div>

      {/*follow-us*/}
      <div className="follow-us">
        <h2>
          Sekite mus{" "}
          <a
            href="https://www.facebook.com/sniegokalnas1/"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-us__highlight"
          >
            čia
          </a>
        </h2>
        <div className="follow-us__images">
          <div className="follow-us__image follow-us__image--1"></div>
          <div className="follow-us__image follow-us__image--2"></div>
          <div className="follow-us__image follow-us__image--3"></div>
        </div>
      </div>

      {/*footer*/}

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
