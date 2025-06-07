import "./ski-servis-list.css";

export const SkiServisList = () => {
  return (
    <>
      <div className="heroa">
        <h1>
          Įbrėžimų užpildymas. Šoninių briaunų galandinimas. Paviršiaus
          šlifavimas ir lyginimas. Vaškavimas Poliravimas
        </h1>
      </div>

      <div className="section">
        <div className="section-title">
          <h2>Nuomos pasiūlymai</h2>
          <p>Peržiūrėkite mūsų slidžių kolekciją</p>
        </div>

        <div className="service-cards">
          <div className="service-card">
            <h3>Vaškavimas</h3>
            <ul>
              <li>Paviršiaus vašakavimas</li>
              <li>Poliravimas</li>
            </ul>
            <div className="price">8EUR</div>
          </div>

          <div className="service-card">
            <h3>"Mini" servisas</h3>
            <ul>
              <li>Šoninių briaunų galandinimas</li>
              <li>Paviršiaus šlifavimas ir lyginimas</li>
              <li>Vaškavimas</li>
              <li>Poliravimas</li>
            </ul>
            <div className="price">15EUR</div>
          </div>

          <div className="service-card">
            <h3>"Maxi" servisas</h3>
            <ul>
              <li>Įbrėžimų užpildymas "P-TEX"</li>
              <li>Šoninių briaunų galandinimas</li>
              <li>Paviršiaus šlifavimas ir lyginimas</li>
              <li>Vaškavimas</li>
              <li>Poliravimas</li>
            </ul>
            <div className="price">25EUR</div>
          </div>
        </div>

        <div className="service-tables">
          <table className="service-table">
            <thead>
              <tr>
                <th>Slidžių servisas</th>
                <th>Kaina</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Pilnas servisas „MAXI“
                  <br />
                  Įbrėžimų užpildymas „P-Tex“, slystamojo paviršiaus šlifavimas,
                  briaunų galandinimas, struktūros išpjovimas, vaškavimas,
                  poliravimas
                </td>
                <td>25€</td>
              </tr>
              <tr>
                <td>
                  Pilnas servisas „MINI“
                  <br />
                  Slystamojo paviršiaus šlifavimas, briaunų galandinimas,
                  struktūros išpjovimas, vaškavimas, poliravimas
                </td>
                <td>15€</td>
              </tr>
              <tr>
                <td>Vaškavimas</td>
                <td>8€</td>
              </tr>
              <tr>
                <td>
                  Slystamojo paviršiaus šlifavimas
                  <br />
                  Su struktūros išpjovimu
                </td>
                <td>8€</td>
              </tr>
              <tr>
                <td>
                  Briaunų galandinimas
                  <br />
                  Pagal 86° - 89° laipsnį
                </td>
                <td>5€</td>
              </tr>
              <tr>
                <td>Apkaustų nustatymas ir remontas</td>
                <td>NUO 8€</td>
              </tr>
            </tbody>
          </table>

          <table className="service-table">
            <thead>
              <tr>
                <th>Snieglenčių servisas</th>
                <th>Kaina</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Pilnas servisas „MAXI“
                  <br />
                  Įbrėžimų užpildymas „P-Tex“, slystamojo paviršiaus šlifavimas,
                  briaunų galandinimas, struktūros išpjovimas, vaškavimas,
                  poliravimas
                </td>
                <td>25€</td>
              </tr>
              <tr>
                <td>
                  Pilnas servisas „MINI“
                  <br />
                  Slystamojo paviršiaus šlifavimas, briaunų galandinimas,
                  struktūros išpjovimas, vaškavimas
                </td>
                <td>15€</td>
              </tr>
              <tr>
                <td>Vaškavimas</td>
                <td>8€</td>
              </tr>
              <tr>
                <td>
                  Slystamojo paviršiaus šlifavimas
                  <br />
                  Su struktūros išpjovimu
                </td>
                <td>8€</td>
              </tr>
              <tr>
                <td>
                  Briaunų galandinimas
                  <br />
                  Pagal 86° - 89° laipsnį
                </td>
                <td>5€</td>
              </tr>
              <tr>
                <td>Apkaustų nustatymas ir remontas</td>
                <td>NUO 8€</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

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
