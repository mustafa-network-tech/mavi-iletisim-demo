# Projeyi Vercel'e Aktarma (Deploy)

GitHub’a yüklediğiniz projeyi Vercel’de yayına almak için aşağıdaki adımları izleyin.

---

## 1. Vercel hesabı açın / giriş yapın

1. Tarayıcıda **https://vercel.com** adresine gidin.
2. **Sign Up** veya **Log In** tıklayın.
3. **Continue with GitHub** seçin ve GitHub hesabınızla giriş yapın (önerilir).
4. İzin isterse **Authorize** / **Install** deyin; böylece Vercel, GitHub’daki depolarınıza erişebilir.

---

## 2. Yeni proje oluşturun (GitHub’dan import)

1. Vercel ana sayfasında **Add New…** → **Project** tıklayın.
2. **Import Git Repository** bölümünde **GitHub**’ı seçin.
3. Listede **mavi-iletisim** (veya GitHub’a yüklediğiniz repo adı) deposunu görün.
4. Yanındaki **Import** butonuna tıklayın.

---

## 3. Proje ayarlarını kontrol edin

Açılan sayfada:

- **Framework Preset:** **Next.js** otomatik seçili olmalı (değiştirmeyin).
- **Root Directory:** Boş bırakın.
- **Build Command:** `npm run build` (varsayılan).
- **Output Directory:** `.next` (varsayılan).
- **Install Command:** `npm install` (varsayılan).

Özel bir ortam değişkeni (API anahtarı vb.) kullanmıyorsanız **Deploy** butonuna basın.

---

## 4. Deploy’u bekleyin

- Vercel projeyi derleyip yayına alır; genelde 1–3 dakika sürer.
- İşlem bitince **Congratulations!** benzeri bir sayfa ve size özel bir site adresi görürsünüz.
- Örnek: `mavi-iletisim.vercel.app` veya `mavi-iletisim-xxxx.vercel.app`

**Visit** veya **Go to Dashboard** ile siteyi açıp kontrol edin.

---

## 5. Sonraki güncellemeler (opsiyonel)

- Kodda değişiklik yapıp GitHub’a `git push` yaptığınızda, Vercel (ayar açıksa) otomatik yeni bir deploy başlatır.
- Yeni sürüm birkaç dakika içinde canlı sitede görünür.

---

## Özet

1. **vercel.com** → GitHub ile giriş.
2. **Add New** → **Project** → GitHub repo’nuzu seçin → **Import**.
3. Ayarları olduğu gibi bırakın → **Deploy**.
4. Bitince verilen linkten siteyi açın.

Bu adımlarla projeniz Vercel’de (sanal sunucuda) yayında olur.
