// $(document).ready(function () {
//     $.ajax({
//       url: "http://localhost:8080/api/issue/statuses",
//       dataType: "json"
//     }).done(function (response) {
//       let section = $(".section");
//       let html = "";
//       $.each(response.data, function (i, status) {
//         html += '<div class="section-container"><div class="section-container-text">'+ status.status +'</div><div class="section-conteiner-tasks"><div class="task"></div><!-- The Modal --><div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><div class="modal-content-container"><div class="first-section"><div class="branch"><a href="">branch</a></div><div class="task-name"><h2>Task Name</h2></div><div class="description"><p  class="headlines">Description</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore culpa pariatur voluptates, cupiditate temporibus sequi fugiat id quae eius quaerat, doloribus inventore assumenda hic veritatis deleniti doloremque suscipit consequatur voluptatem!</p></div></div><div class="second-section"><div class="second-section-buttons"><!-- | редактировать задачу --><button>Редактировать</button></div><div class="second-section-info"><div class="select-dropdown"><select><option value="Option 1">status / in work</option><option value="Option 2"></option><option value="Option 3"></option></select></div><p class="headlines">Сведения</p><div class="infoooo"><div class="info-1"><p>Автор: </p><p>Исполнитель: </p><p>Приоритет:</p><p>Проект: </p><p>Метки: </p><p>User Story:</p><p>Story Points: </p><p>Branch: </p></div><div class="info-2"><p class="priority">авторный</p><p class="priority">исполнительный</p><p class="priority">приоритетный</p><p class="priority">проектный</p><p class="priority">меточные</p><p class="priority">какойнибудь</p><p class="priority">1</p><p class="priority">123</p></div></div><div class="datetime"><p>Время создания: </p><p class="date">20:19</p></div></div></div></div></div></div><div class="section-conteiner-tasks"><div class="task"></div></div><div class="section-conteiner-tasks"><div class="task"></div></div></div>';
//         console.log(html)
//       });
//       section.append(html);
//     });
//   });

// $(document).ready(function () {
//     $.ajax({
//       url: "Access-Control-Allow-Origin: http://localhost:8080/api/issue/statuses",
//     }).done(function (response) {
//       let mediaCard = $(".select-user-story-dropdown");
//       let html = "";
//       $.each(response.data, function (i, userStory) {
//         html += '<option value="Option 1">'+userStory+'</option>';
//       });
//       mediaCard.append(html);
//       console.log();
//     });
//   });