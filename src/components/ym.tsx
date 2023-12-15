/* eslint-disable react/no-danger */

const getScriptBody = (key: string) => `
(function (d, w, c) {
    (w[c] = w[c] || []).push(function () {
        try {
            w.yaCounter48604151 = new Ya.Metrika({
                id: ${key},
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
            });
        } catch (e) {
        }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () {
            n.parentNode.insertBefore(s, n);
        };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else {
        f();
    }
})(document, window, "yandex_metrika_callbacks");
`;

export const YandexMetrika = () => {
    const key = process.env.NEXT_PUBLIC_YANDEX_METRICA;
    return key ? (
      <>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: getScriptBody(key) }} />
        <noscript>
          <div>
            <img src={`https://mc.yandex.ru/watch/${key}`} style={{ position: 'absolute', left: '-9999px;' }} alt="" />
          </div>
        </noscript>
      </>
    ) : null;
};