function display_photo(param) {
  if(param == 'all'){
    attr = "<style>#div5 .gallery .photo_table .icons{ display: none; }</style>"; var buttons = "<style>  #div5 .gallery .photo_table .apps{display: none;}  #div5 .gallery .photo_table .web{display: none;}#div5 .gallery .photo_table .all { display: inline-block;} #div5 .gallery #icons{background-color: #ebc985;} #div5 .gallery #web{ background-color: #ebc985; } #div5 .gallery #apps{ background-color: #ebc985; } #div5 .gallery #all{ background-color: white; }</style>"
  }
  else if(param == 'web'){
    attr = "<style>#div5 .gallery .photo_table .icons{ display: none; }</style>"; var buttons = "<style>  #div5 .gallery .photo_table .apps{display: none;}  #div5 .gallery .photo_table .web{display: inline-block;}#div5 .gallery .photo_table .all { display: auto;} #div5 .gallery #icons{background-color: #ebc985;} #div5 .gallery #web{ background-color: white; } #div5 .gallery #apps{ background-color: #ebc985; } #div5 .gallery #all{ background-color: #ebc985; }</style>"
  }
  else if(param == 'apps'){
      attr = "<style>#div5 .gallery .photo_table .icons{ display: none; } </style>"; var buttons = "<style> #div5 .gallery .photo_table .apps{display: inline-block;}  #div5 .gallery .photo_table .web{display: none;}#div5 .gallery .photo_table .all { display: auto;} #div5 .gallery #icons{background-color: #ebc985;} #div5 .gallery #web{ background-color: #ebc985; } #div5 .gallery #apps{ background-color: white; } #div5 .gallery #all{ background-color: #ebc985; }</style>"
  }
  else if(param == 'icons'){
    attr = "<style>#div5 .gallery .photo_table .icons{ display: inline-block; }</style>"; var buttons = "<style>  #div5 .gallery .photo_table .apps{display: none;}  #div5 .gallery .photo_table .web{display: none;}#div5 .gallery .photo_table .all { display: auto;} #div5 .gallery #icons{background-color: white;} #div5 .gallery #web{ background-color: #ebc985; } #div5 .gallery #apps{ background-color: #ebc985; } #div5 .gallery #all{ background-color: #ebc985; }</style>"
  }
  document.getElementById('displayer').innerHTML += attr;
  document.getElementById('displayer').innerHTML += buttons;
}
