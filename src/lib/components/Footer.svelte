<footer>
  <img src="/icones/registered.png" alt="Icon Footer" class="registered" />
  <span class="brilho">CopyRight | Created by &copy;Louis & Amanda Wisnienski</span>
</footer>

<style>
  footer {
    background: url("/imagens/footer.png");
    height: 100px;
    font-weight: 700;
    color: var(--branco);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .registered {
    margin-right: 1px;
  }

  .brilho {
    animation: brilho 2s linear infinite;
  }

  @keyframes brilho {
    0% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    }
    50% {
      text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4);
    }
    100% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    }
  }
</style>
