import { SiteFooter, SiteHeader } from "../../_components/site";

export const metadata = {
  title: "Münis Gizlilik Politikası — Afterwish, Inc.",
  description:
    "Münis uygulamasının gizlilik politikası: hesap yok, kişisel kayıtlar cihazda şifreli.",
};

export default function MunisPrivacyPage() {
  return (
    <>
      <SiteHeader />

      <main className="wrap">
        <article className="legal" lang="tr">
          <h1>Münis Gizlilik Politikası</h1>
          <p className="effective">Yürürlük: 5 Kasım 2026</p>
          <p className="lang-switch">
            <a href="#en">English version below</a>
          </p>

          <h2>1. Kısaca</h2>
          <p>
            Münis, Afterwish, Inc. (&ldquo;biz&rdquo;) tarafından geliştirilen
            bir namaz vakti, Kur&rsquo;an ve ibadet uygulamasıdır. Münis&rsquo;te{" "}
            <strong>hesap yoktur</strong>. Namaz takibiniz, notlarınız,
            dualarınız ve ayarlarınız <strong>cihazınızda şifreli</strong>{" "}
            olarak saklanır ve bize gönderilmez. Uygulamada analitik, reklam
            takibi, atıf (attribution) ya da veri simsarı yazılımı yoktur.
            Verilerinizi satmayız.
          </p>

          <h2>2. Cihazınızda kalan veriler</h2>
          <ul>
            <li>
              Namaz ve oruç takibi, kaza kayıtları, zikir sayıları, Kur&rsquo;an
              okuma ilerlemesi, notlar, işaretler, dua listeleri ve tercihler.
            </li>
            <li>
              Bu veriler SQLCipher ile şifrelenmiş bir veritabanında tutulur;
              anahtar iOS Anahtar Zinciri&rsquo;nde / Android Keystore&rsquo;da
              saklanır.
            </li>
            <li>
              Şifreli yedek dosyasını yalnızca siz oluşturur ve siz nereye
              koyacağınıza karar verirsiniz.
            </li>
          </ul>

          <h2>3. Konum</h2>
          <p>
            Konum izni, vakitleri ve kıble yönünü bulunduğunuz yere göre
            hesaplamak içindir ve isteğe bağlıdır; ilinizi elle de
            seçebilirsiniz. Koordinatlarınız sunucumuza gönderilmez; vakit
            servisimize yalnızca <strong>ilçe kimliği</strong> ve ay bilgisi
            gider. Sürekli arka plan konum takibi yapılmaz.
          </p>
          <p>
            &ldquo;Yakındaki camiler&rdquo; özelliğini kullandığınızda,
            yaklaşık 1 km&rsquo;ye yuvarlanmış konumunuz caminin bulunması için
            OpenStreetMap servislerine (Overpass API, Nominatim) gönderilir. Bu
            istek siz özelliği açtığınızda yapılır.
          </p>

          <h2>4. Sunucumuza giden veriler</h2>
          <ul>
            <li>
              <strong>Namaz vakitleri:</strong> ilçe kimliği ve ay. Vakitler
              Diyanet İşleri Başkanlığı verisinden gelir.
            </li>
            <li>
              <strong>Aile ve ortak hatim (isteğe bağlı):</strong> çevrimiçi
              aile grubu açarsanız ya da bir gruba katılırsanız, girdiğiniz takma
              ad ve cüz durumları (sahiplenme, tamamlama) sunucumuzda saklanır.
              Bunlar gönderilmeden önce açık onayınız istenir. Namaz takibiniz,
              günlüğünüz ve konumunuz aile grubuna gönderilmez. Grubun verisi son
              üye ayrıldığında silinir.
            </li>
            <li>
              <strong>Abonelik doğrulama:</strong> Premium aboneliğinizin geçerli
              olduğunu doğrulamak için mağazanın verdiği satın alma kaydı
              sunucumuza gönderilir ve App Store / Google Play ile doğrulanır.
              Ödeme bilgileriniz bize hiç ulaşmaz; ödemeyi Apple veya Google
              işler.
            </li>
          </ul>
          <p>
            Sunucumuz IP adresinizi, istek gövdesini ya da cihaz kimliğinizi
            kaydetmez. Kötüye kullanımı önlemek için IP adresinin tuzlanmış bir
            özeti yalnızca bellekte ve en fazla bir dakika tutulur.
          </p>

          <h2>5. Üçüncü taraf içerikleri</h2>
          <p>
            Aşağıdaki özellikleri yalnızca siz açtığınızda ilgili servise
            bağlanılır; bu servisler kendi gizlilik politikalarına tabidir:
          </p>
          <ul>
            <li>Kâbe canlı yayını: YouTube (youtube-nocookie.com).</li>
            <li>Kur&rsquo;an radyoları: mp3quran.net ve yayın sağlayıcıları.</li>
            <li>
              Yol tarifi ve harita: Apple Haritalar veya Google Haritalar
              uygulaması.
            </li>
            <li>Satın alma: App Store ve Google Play.</li>
          </ul>

          <h2>6. Bildirimler ve izinler</h2>
          <p>
            Ezan ve hatırlatma bildirimleri cihazınızda zamanlanır; bildirim
            içeriği sunucudan gelmez. Face ID / parmak izi yalnızca uygulama
            kilidini açmak için cihazda kullanılır, biyometrik veri bize ulaşmaz.
          </p>

          <h2>7. Verilerinizi silme</h2>
          <p>
            Ayarlar → Gizlilik → &ldquo;Tüm verimi sil&rdquo; cihazdaki bütün
            verileri ve aile grubundaki üyeliğinizi siler. Uygulamayı silmek de
            cihazdaki verileri kaldırır. Hesap olmadığı için bizde silinecek
            başka kişisel kayıt bulunmaz.
          </p>

          <h2>8. Çocuklar</h2>
          <p>
            Münis bilerek çocuklardan kişisel veri toplamaz. Uygulama hesap
            açmayı ve kişisel bilgi girmeyi gerektirmez.
          </p>

          <h2>9. Değişiklikler</h2>
          <p>
            Bu politikayı değiştirirsek güncel hâlini bu sayfada yayımlar ve
            yürürlük tarihini güncelleriz. Önemli değişiklikleri uygulama içinde
            de duyururuz.
          </p>

          <h2>10. İletişim</h2>
          <p>
            Afterwish, Inc. —{" "}
            <a href="mailto:support@afterwishinc.com">support@afterwishinc.com</a>
          </p>

          <hr />
        </article>

        <article className="legal" lang="en" id="en">
          <h1>Münis Privacy Policy</h1>
          <p className="effective">Effective November 5, 2026</p>

          <h2>1. Summary</h2>
          <p>
            Münis is a prayer times, Quran and worship app made by Afterwish,
            Inc. (&ldquo;we&rdquo;). There are <strong>no accounts</strong>. Your
            prayer tracking, notes, duas and settings are stored{" "}
            <strong>encrypted on your device</strong> and are not sent to us.
            The app contains no analytics, ad tracking, attribution or data
            broker SDKs. We do not sell your data.
          </p>

          <h2>2. Data that stays on your device</h2>
          <ul>
            <li>
              Prayer and fasting tracking, missed-prayer records, dhikr counts,
              Quran reading progress, notes, bookmarks, dua lists and
              preferences.
            </li>
            <li>
              Stored in a SQLCipher-encrypted database; the key is kept in the
              iOS Keychain / Android Keystore.
            </li>
            <li>Encrypted backup files are created only by you, and you choose where they go.</li>
          </ul>

          <h2>3. Location</h2>
          <p>
            Location is optional and used to calculate prayer times and the
            qibla direction; you can also pick your city manually. Your
            coordinates are never sent to our server; our prayer times service
            receives only a <strong>district ID</strong> and month. There is no
            continuous background location tracking.
          </p>
          <p>
            When you use &ldquo;Nearby mosques&rdquo;, your location rounded to
            roughly 1 km is sent to OpenStreetMap services (Overpass API,
            Nominatim) to find mosques. This happens only when you open that
            feature.
          </p>

          <h2>4. Data sent to our server</h2>
          <ul>
            <li>
              <strong>Prayer times:</strong> district ID and month. Times come
              from the Presidency of Religious Affairs of Türkiye (Diyanet).
            </li>
            <li>
              <strong>Family and shared khatm (optional):</strong> if you create
              or join an online family group, the nickname you enter and juz
              status (claimed, completed) are stored on our server, after you
              explicitly agree. Your prayer tracking, journal and location are
              never shared with the group. Group data is deleted when the last
              member leaves.
            </li>
            <li>
              <strong>Subscription verification:</strong> to confirm your
              Premium subscription, the purchase record issued by the store is
              sent to our server and verified with the App Store / Google Play.
              We never receive your payment details; payments are processed by
              Apple or Google.
            </li>
          </ul>
          <p>
            Our server does not log your IP address, request bodies or device
            identifiers. To prevent abuse, a salted hash of the IP address is
            kept in memory only, for at most one minute.
          </p>

          <h2>5. Third-party content</h2>
          <p>
            These services are contacted only when you open the related feature
            and are governed by their own privacy policies: YouTube
            (youtube-nocookie.com) for the Kaaba live stream; mp3quran.net and
            its stream providers for Quran radio; Apple Maps or Google Maps for
            directions; the App Store and Google Play for purchases.
          </p>

          <h2>6. Notifications and permissions</h2>
          <p>
            Adhan and reminder notifications are scheduled on your device; their
            content does not come from a server. Face ID / fingerprint is used
            on-device only to unlock the app; biometric data never reaches us.
          </p>

          <h2>7. Deleting your data</h2>
          <p>
            Settings → Privacy → &ldquo;Delete all my data&rdquo; erases all data
            on the device and your family group membership. Uninstalling the app
            also removes on-device data. Because there are no accounts, we hold
            no other personal records to delete.
          </p>

          <h2>8. Children</h2>
          <p>
            Münis does not knowingly collect personal data from children. The
            app does not require an account or personal information.
          </p>

          <h2>9. Changes</h2>
          <p>
            If we change this policy we will publish the updated version on this
            page and update the effective date. Significant changes will also be
            announced in the app.
          </p>

          <h2>10. Contact</h2>
          <p>
            Afterwish, Inc. —{" "}
            <a href="mailto:support@afterwishinc.com">support@afterwishinc.com</a>
          </p>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
