  <img src=" ${ require('../../asset/img.png')}" style="width: 400px; height: 300px;"/>
  <div class="layer">
    <div class='layer1'>This is <%= name %> layer</div>
    <% for( var i= 0;i<arr.length;i++){ %>
      <%= arr[i] %>
    <% } %>
</div>