// PXiMoLmUYDtQslZDbqRGDrYs3bOyq0Ng

//api.nytimes.com/svc/search/v2/articlesearch.json?api-key=PXiMoLmUYDtQslZDbqRGDrYs3bOyq0Ng&begin_date=20220101&end_date=20221201&q=azerbaijan

$(document).ready(() => {

  const render = (arr) => {
    $("#newsList").html(
      arr.map((news) => {
        return `<div class="col-md-12">
                    <div class="card mb-5">
                        <img style="height:400px; object-fit: cover;"
                            src="https://www.nytimes.com/${news?.multimedia[0]?.url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${news?.abstract}</h5>
                            <p class="card-text">${news?.lead_paragraph}</p>
                        </div>
                        <a href="${news?.web_url}" target="blank" class="btn btn-danger">Read More</a>
                    </div>
                </div> `;
      }).join("")
    );
  };

  const getFormInfo = () => {
    let sort = $("#sortNews").val();
    let end_date = $("#endDateNews").val();
    let begin_date = $("#startDateNews").val();
    let q = $("#titleNews").val();

    let formData = {
      q,
      sort,
      begin_date,
      end_date,
      "api-key": "PXiMoLmUYDtQslZDbqRGDrYs3bOyq0Ng",
    };

    return formData;
  };

  $("#searchNews").on("click", (e) => {
    e.preventDefault();
    let form = getFormInfo();

    console.log(form, "form");
    getNews(form);
  });

  // API
  const getNews = (data) => {
    $.ajax({
      method: "GET",
      data: data,
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    })
      .then((info) => {
        console.log(info);
        render(info.response.docs);
      })
      .catch((err) => {
        alert("err", err.responseJSON.errors[0]);
      });
  };
});
