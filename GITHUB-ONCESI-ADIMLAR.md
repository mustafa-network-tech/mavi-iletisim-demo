# GitHub'a Göndermeden Önce Yapılacaklar

Projede birçok değişiklik yaptınız. GitHub'a eklemeden önce sadece şu adımlar yeterli.

---

## 1. `npm install` gerekli mi?

- **Kendi bilgisayarınızda:** Zaten projeyi çalıştırıyorsanız `node_modules` var demektir; **tekrar `npm install` yapmanız şart değil**.
- **Yeni paket eklediyseniz** (örn. `npm install bir-paket`): O zaman bir kez `npm install` yapın ki `package.json` / `package-lock.json` güncel olsun. Bu dosyalar GitHub'a gider; `node_modules` gitmez (.gitignore'da).

**Kısaca:** Proje şu an çalışıyorsa atlayabilirsiniz; çalışmıyorsa `npm install` yapın.

---

## 2. Projenin derlendiğini kontrol edin

Terminalde proje klasöründe:

```bash
npm run build
```

- **Hata yoksa:** GitHub'a göndermeye hazırsınız.
- **Hata varsa:** Terminaldeki hata mesajını okuyup düzeltin, sonra tekrar `npm run build` çalıştırın.

---

## 3. GitHub'a göndermek için sırayla

Proje klasöründe (örn. `mavi iletişim`) terminalde:

| Sıra | Komut | Açıklama |
|------|--------|----------|
| 1 | `git init` | Bu klasörü Git deposu yapar (ilk kez yapacaksanız) |
| 2 | `git add .` | Tüm değişiklikleri ekler (.gitignore’dakiler hariç) |
| 3 | `git commit -m "Proje hazır: tüm güncellemeler"` | Değişiklikleri kayda alır |
| 4 | GitHub’da yeni repo oluştur | github.com → New repository |
| 5 | `git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADI.git` | GitHub adresini bağlar |
| 6 | `git branch -M main` | Ana dal adı main olsun |
| 7 | `git push -u origin main` | Projeyi GitHub’a yükler |

---

## Özet

1. **npm install** → Sadece proje çalışmıyorsa veya yeni paket eklediyseniz.
2. **npm run build** → Mutlaka yapın; hatasız bitmeli.
3. **git init → git add . → git commit → remote → git push** → Bunları sırayla yapın.

Bu adımlardan sonra proje GitHub’da hazır olur.
