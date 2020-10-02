# Lightweight vanilla js modal component

This is just 2kb Lightweight vanilla js modal component , with option esc close , outside click close , custom height , widht


```markdown

### javascript code to open Modal 

modal.open('delete-record'); // to open Modal with wanted html content

modal.close(); // to close Modal

### HTML code to insert in Modal 

<div id="delete-record" style="display:none"><div class="popup-container"><div class="content-row popup-row"><div class="pop-up-text"> Êtes-vous sûr de vouloir supprimer <span class="row-info"> : Delia</span>?</div></div><div class="space-15"></div>
  <div class="content-row">
    <div class="col-12 alpha">
  <button class="btn primary-btn slim-btn icon-btn danger delete-confirm" type="button" data-delete-url="">Supprimer</button>
    </div>
    <div class="col-12 omega">
      <button class="btn secondary-btn slim-btn icon-btn closeModal" type="button">Annuler</button>
    </div>
  </div>
  </div>
</div>

```

