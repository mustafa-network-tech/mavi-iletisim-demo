# Vercel'de Siteyi Güncelleme

Site hazır. Yaptığınız tüm değişiklikleri Vercel'de güncellemek için GitHub'a push etmeniz yeterli.

---

## Adımlar

### 1. Proje klasöründe terminali açın

`mavi iletişim` (veya projenizin bulunduğu klasör) içinde terminal açın.

### 2. Değişiklikleri ekleyin ve commit edin

```bash
git add .
git commit -m "Demo metinleri, footer düzenlemesi, Hydraland kaldırıldı"
```

### 3. GitHub'a gönderin

```bash
git push
```

### 4. Vercel otomatik günceller

- Repo Vercel'e bağlıysa, `git push` sonrası Vercel yeni bir deploy başlatır.
- Birkaç dakika içinde canlı sitede güncellemeler görünür.
- Vercel dashboard'dan (vercel.com) **Deployments** sekmesinde ilerlemeyi takip edebilirsiniz.

---

## Özet

1. `git add .`
2. `git commit -m "Güncellemeler"`
3. `git push`

Bu üç adımdan sonra Vercel'deki site otomatik güncellenir.
