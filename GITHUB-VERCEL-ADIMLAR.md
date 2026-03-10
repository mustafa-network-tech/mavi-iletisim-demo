# Projeyi GitHub'a ve Vercel'e Taşıma Rehberi

Bu rehber, projenizi yerel bilgisayardan GitHub'a yükleyip ardından Vercel'de yayına almanız için adımları anlatır.

---

## Bölüm 1: Projeyi Derleyip Kontrol Etmek

### 1. Projeyi derleyin (build)

Terminalde proje klasöründe şu komutu çalıştırın:

```bash
npm run build
```

- Hata yoksa `Build completed` benzeri bir mesaj görürsünüz.
- Hata varsa terminaldeki mesajları okuyup düzeltin, sonra tekrar `npm run build` çalıştırın.

### 2. (İsteğe bağlı) Yerelde test edin

Derleme başarılıysa, üretim sürümünü yerelde denemek için:

```bash
npm run start
```

Tarayıcıda `http://localhost:3000` adresini açıp siteyi kontrol edin.

---

## Bölüm 2: Projeyi GitHub'a Yüklemek

### 1. Git kurulumu

- Bilgisayarınızda Git yüklü değilse: https://git-scm.com adresinden indirip kurun.
- Kuruluysa terminalde `git --version` yazarak kontrol edin.

### 2. GitHub hesabı

- https://github.com adresinden ücretsiz hesap açın (yoksa).

### 3. Proje klasöründe Git’i başlatın

Terminalde proje klasörüne gidin (örn. `mavi iletişim`), sonra:

```bash
git init
```

Bu komut projeyi bir Git deposu yapar.

### 4. .gitignore dosyası

Projede `.gitignore` dosyası olmalı (Next.js genelde oluşturur). İçinde en az şunlar bulunur:

- `node_modules`
- `.next`
- `.env` veya `.env.local` (gizli bilgiler için)

Bu sayede gereksiz ve hassas dosyalar GitHub’a gitmez.

### 5. Tüm dosyaları “stage” edin

```bash
git add .
```

### 6. İlk commit’i oluşturun

```bash
git commit -m "İlk commit: Mavi İletişim projesi"
```

### 7. GitHub’da yeni depo oluşturun

1. https://github.com/new adresine gidin.
2. **Repository name** kısmına örn. `mavi-iletisim` yazın.
3. Public seçin.
4. **Create repository** butonuna tıklayın.
5. “Push an existing repository…” bölümündeki komutları kopyalayacaksınız; şimdilik sayfayı açık bırakın.

### 8. GitHub’ı “remote” olarak ekleyin

GitHub’da oluşturduğunuz deponun sayfasında gösterilen adresi kullanın. Örnek (kullanıcı adınız ve repo adınızla değiştirin):

```bash
git remote add origin https://github.com/KULLANICI_ADINIZ/mavi-iletisim.git
```

### 9. Ana dalı “main” yapın (gerekirse)

```bash
git branch -M main
```

### 10. Projeyi GitHub’a gönderin

```bash
git push -u origin main
```

- İlk seferde GitHub kullanıcı adı ve şifre (veya Personal Access Token) istenebilir.
- İşlem bitince projeniz GitHub’da görünür.

---

## Bölüm 3: Vercel’e Aktarmak ve Yayına Almak

### 1. Vercel hesabı

- https://vercel.com adresine gidin.
- **Sign Up** ile GitHub hesabınızla giriş yapın (önerilir).

### 2. Yeni proje (Import)

1. Vercel panelinde **Add New…** → **Project** deyin.
2. **Import Git Repository** bölümünde GitHub’ı seçin; gerekirse “Connect GitHub” ile yetki verin.
3. Listeden **mavi-iletisim** (veya repo adınız) deposunu seçin.
4. **Import** butonuna tıklayın.

### 3. Proje ayarları

- **Framework Preset:** Next.js otomatik seçilir; değiştirmeyin.
- **Root Directory:** Boş bırakın (proje zaten kökte).
- **Build Command:** `npm run build` (varsayılan).
- **Output Directory:** `.next` (varsayılan).
- **Install Command:** `npm install` (varsayılan).

Özel bir ortam değişkeni (API anahtarı vb.) yoksa **Deploy** butonuna basın.

### 4. Deploy süreci

- Vercel projeyi derleyip yayına alır; birkaç dakika sürebilir.
- Tamamlandığında size bir adres verir (örn. `mavi-iletisim.vercel.app`).

### 5. Sonraki güncellemeler

- Kodda değişiklik yaptıktan sonra:

```bash
git add .
git commit -m "Açıklama: ne değiştirdiğiniz"
git push
```

- GitHub’a her `git push` yaptığınızda Vercel otomatik yeni bir build alıp siteyi günceller (GitHub entegrasyonu açıksa).

---

## Özet Checklist

- [ ] `npm run build` hatasız tamamlandı
- [ ] `git init` yapıldı
- [ ] `git add .` ve `git commit` yapıldı
- [ ] GitHub’da yeni repo oluşturuldu
- [ ] `git remote add origin ...` ile bağlantı eklendi
- [ ] `git push -u origin main` ile kod GitHub’a gönderildi
- [ ] Vercel’de GitHub repo import edildi
- [ ] Deploy tamamlandı, site adresi açıldı

Bu adımları takip ederek projenizi GitHub’a yükleyip Vercel’de yayına alabilirsiniz.
