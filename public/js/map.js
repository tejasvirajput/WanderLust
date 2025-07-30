mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
  style: "mapbox://styles/mapbox/outdoors-v12", // outdoors-v12 standard-satellite
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact Location provided after booking</p>`
    )
  )
  .addTo(map);

map.on("load", () => {
  // Load an image from an external URL.
  map.loadImage(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAe1BMVEX/////Wl//WF3/SU//VVr/S1H/Vlv/SE7/TlT/Ulf/U1j/09T/TVP/rK7/l5r/UFX/jZD/dHj/Y2j/6+z/tbf/8vL/+Pj/bnL/e3//lJf/vb7/4uP/+vr/sbP/Zmr/h4v/xMX/2dr/paf/ysv/gIP/n6L/1tf/5ub/PENYz5ocAAAO8klEQVR4nO1d6ZqiOhBtEgiLaBR3VMBt+r7/E16lChRkLQw483n+zLRDM3Cs1J7Kz88XX3zxxRdffPHFJ2C1G/nj6/QyW3ue5nnr2WV6Hfuj3WroB+sF+6M/mTncsKTt6EIwgBC6Y0vL4M5s4h/3Qz+kQsyjicdd6QimlYEJR7rcm0TzoR9WBUYTjUun/O0zTDiSa5PR0I/8VuyjC3cbvv+DB5dfon9lWZxDLkWr908gJA/PQz9+d8yvjksjAGlwnevfrRtGG7PlEngFc8zN36saIs/oIgJPwmB40dAvQ4KvuV1F4AHmav7QL9QaZ816HwMxC5b2d6nHY2C8l4GYBSM4Dv1ijbEM+Xv0QB6Ch8uhX64ZDlxXwsAdOj8M/XoNsAssZQzcYQW7oV+xDidTzTJ4QJinoV+yEvNAKmbgDhl8sOfoK9KFeQj+sc7ClPfCwB18OvTLFmIZ2L1RoGl28IFW8tgpPGwP4X6cw+Sb73cMq8HMD1MKp/5UwQP8o4zk1hiAAk0ztkO/+AOXPryCIsjL0K+eYDMUBTcSNkO/PGDTwSYKx7Ztp4NFsT+ChAuZAib57Ho4jCdrLslWxf6A5RBSFwJzg7R8sFpo5PUkw0Hf/4YJNVIWVpS50YHsYFiTYV49wZhqFJ11vsb8K6hqwRgP8u6Is0mloECVLRlVEswBs607KgUieNzkUVKckxOx5mC5pZVOfGbGMejbH9YuN4IT/jiicsr0obo3ZtTcqYvRTmTExVhmmwv4YOsQ76jPhqHgSjVnYg03OD1MAXr+e7KfIK9DUEAW3GT1Rs83QN3uk5PS5gB12RX5KxPg1Cx55gZIjEa9K5P9q4QNuZBi/sY3CLM3wAVCFwS998jBJ2cMdBCDF7tqgJEnC4Jm9JxXyglyG5hQHNjkvULmxZ9HLvXGzOg3zUpfCTpkxY+vyTc3iv/FI7Or9xpCnunpQxSD9WtwwDS4Nz0vx/v0mSu6LGvggCMwKiLRggUdkG/ORH8UnOiZIxPWbIEYpK8woguC3VumeUn2jjQHYv0SeZd+OUHNYPalFkN6jwU+Y4m4oyD8oWsbvaekEjlifohBmf2TEDvNOghCP1H0i2VvDoyZS80f0+N/LzCcTSF68RZ39Ad0ILircIO6CwLvQxC6iAGENRXuMHPiKz5cELpoAxCDyrAIBaED0T1ohCndKNSLwTsEQVfeorLsrA1qouPugsBV+whdXEQQg5oMendBUO4sUlPJTcXgDaYBDawylHo39SgUA6Y7Tm6fW3dBcNWGj/RlWiAGQvJgej1dQy9Td+4sCGrNY4doCTXVwygIPouSNOjSf2r2x6ihgyAojZwW5Ao5RgoPMZC5zQhnLa2vYPhIFwSUJDWgpzfyYsBfayJhwg8mlOjhIwtebv42zMlLAdNHaaRQ2FuY9jJYXfMIprqmbvpSwIdKxMBNOwZ+z9EofeAQlwMKAj2hpHAxkFco+q+JGKSKeyy4JV2uJY+cchTFP5KXnlBWgl2RFyiKQZI3QOWwE2gSmeXBJ8k3j7UGujfCVRXeztQ6GGa4kiwi2ojdUweScOChk28e3RxyrcFS5SZNqN0BGM4mL2jAjxn3EKuFPmoc1OwRlXVHVZ8W9VsRUP9JBZ3FPx6yCpbH7kIalhpQSqe2KOFiejvIYTO8XmrqUEHmFB5az0QrJmVoqiVSFEBT1QEq6dT3dWLDuM/5GvjNpQEJEkfdNq9IIZyI6gDFOn07cIV/c8afyfiqNE2F9vNAFARHTRKBGDNiH94jHQ0c7PIOkJHlABPEe+LmeUWxI7H5Bs3cJWUQOJjn5QDSBmF6GWpSovQxWwUFc5pKxHX++1j+IKb73O3QGq4fREPPDtUx4ypChhHNacP45ykdjT1ZxXbhSQei/SB6Ja6KPjVawITJvefkC0ZE1+y7ySi+7vlbh1QIMVhVEjbRvg95eH1hENOcXIGHf34mGtNvtDK3Ek+RZhZA22cXNeaJMqYfNWC2WRd4oVW2lBgGkqeMZnqcqUrg42U0PjoRWZfIHtPZV+ItkxIamN3MzYeBTwt0RG59MCv+lJZdNd5PASlaQNWeV6c2KIknwcekSX7po2IjJdUURAx537YRsC0338aGkeNDEFBwX1L3SbsexSwbv2/n4Eh4Dlz4r1kA3M91TdQEB21wfTE9Lr2BV8G++BEhakRF96pNE4WFKhC5KnAJMYSm+CbW+52kqP1jVKSHcScL9rvi0i3yQCCEpjjM4HS9FYRsBqq+ItOW1IYvdyXoguYrdAjRbyB0fsj3t7ETxJHHWum30MWxwQfc2yxNhBdn7sGOElaiAmd50br5ApdCSfCLJmNkMhdWQlRseECY9u2tkv0JHBTnDRMkG7uu/4HqL9sbhPqyfbnlIzgAT3dV5u1bWG/DR72UrHj0FdsrhI/gABTzsVSKzWcnpnxvEBiNV9ehDio4aK0TZSzk5doM9UWMYsUZw4gj7fYpNQU6sb1trONAcx5N5hWOIGQb2mcvFNjG9j4SPESVj20kwxA3FW9oxldcWodNCnyk9hYacgelOlF7GnC0Lb85utXtewIV+MrtY6Zaq2Y8+nGmpVIGOTFC5K4gZiLEzm78i6WVIuO5JWlaJgkQMJzbe6kKYmfKNxFL46pkskOyEHAGRMmoLXSlCHlVFVXX9nKArReHolXEkpEHZwdJOBUqDmhdoMSNCnJplJwq1npmr1pfuH/griNT95CEc8EoVhwJMG7fKa4kp0rI7ia7zIIcCcyYPU3/SEmYB/nZ3AYUCcqWUxWU5NYpNRbMkf1cnl+C2an7AmMghJYs3YVrP10oTPQfKFUWJTUWSj6LYavVTyRcsPBMt+QpGYVzQBUgnGT/zepkWZBgux85gJo9oqS0ldTaSDXXxxCgcyhMzk1t+mgQmaZqlplR+ul5690u5OtTwsuRVGdSUnOl1d6d9eMOq/n86XyVufes6HhmHOTqqb3wSJuapKT2TuzB0L3ihxnnrICj/Sm8jjioVU0PBrUXh/GClXl+nZPHzPCVrVVI7FlW1ItD7cnSrPxJIlHx8Qy6Oc36+MuTQd1JqKgni9yqqzHLuY5wif9GoVu6qnRDu47QUM6jC6eyrqw3r8PWxvjEKX29mWmuISu/WuZYXAazmSephzoBVG1ypE9rgddjotkMkcYXVtxCUa8uvWe7fyjr2aYrhN6hrHefvoejdyjbw9FlNEO/ULeXp8Oerp6hcE9Xh7198kWf6vYN9b8p7pe1tRIK9/ZRN5ox9+pPcq6hPlkcDodaEkR4u2zR8v9VuceTuhiseyJgl429IZlWK1hQem+piJTu9aXt+UbfPRtvQHxfz0GcUGzZnKd2WhYpdkRjna0RKORA8WgcUqcgVsGzi18hB4pnQJBmgTBxTx+tsjGAOg5UzwKhzYQRmn/0c+V1dRwonwnTNIAWuv703ExmcgZCFyzhgN1/KP/tlIPbRw1FUPlsoEaNQczis+l0xm1mcH4/zdG9/eHeT1/k3GAO32xDDzmw5GUbBiZ6QSK+QMJvx6whB7cbbqfNjutQPyOqyY4KGYBS2p/Ycj5fbnX3uJwvj66+vf8o4vLCAuZi46kBy0OcWRHh7brf/9C6+/ckCnDgjeOE9D7S6pdiH9MDa82j+TgSIi6STJy4pWhuQFAPhRPgYJ+K7f5+vhF8hWnNfBUI5OBRRp/U5Vh7GR5YNzuQR7lfQA5+jefExuJlPnpov4jxXmd2/oyNupM/epkdWCMI9suwlwIO9gUc3IKRlIOkxuLLFw5qio/9zJCs1gi4PePnsHbEFEQ4z8F5Zpg26sSf89qVsyj+65EjB6O1aYpYUaw4crC7SCuAv64qBaGvEzmqvgmIcVaaFIzpoPFyHMQFJoa2cXv7gQkDvry1HXOwiC8An1/I+MV982Y/mdRWcL/y/76vmbKVkRN0VK6BJUjn5DjAHc3AwX/wWzAnZ2HEHGzjX4b6/Fo++0hwks2fCn+9t9nCVc5ivIM/WS2wOKs4wAth4//RfOIAFsHMyviJcW6kYjH0N2O6YtY49N8mPa2NOYAq8e8zB04RBxCBliYx+pw1Xj5zHmobRA7mtRxA72mpt9jrzPnSswdgikGyg6k5B3FD7rGWAzD+ZWuh37MHys+ggMR+4v435QA2/vtGDQcgZS8TNBL+ez6DonS/ATarxw0WDIbjVXEA5yE7WhwOhLKMg22ckBVg/MsSsX2fRVK6GpIhOGvTNbC5sIqDm4NgGMY2pmCJPlIBBz/j293MTXbwXA79n0lTuv8Ij5b5WR6TfopKDn72uyQgCvVyDm6/vkP/uSS3PcTZRGVnVDGZX5XVHKS4ra4qDhKUhWxDnFFVelYZE7mG8QoOntrUFqbWhIM/JbOChjmrrPTMOmaO8d12iV24i8bSgNkeCQf3pbLc4JW/m7sDDBxMMhzE8ccaa2erSUmX2lBn1pWfXWgb4cH3DxvurG/wGLv/sWbM28xmG+xmYcH9nxx3u/AX4zWPiWEeXA//fr8YPgocHi5uNyxtUBru7MKKKFrYUtpxfMjuo++SP4R4dNngZ7qUMj3cmOGH8d/hYvwkuWExhjvDssNZpu/FkGeZdjjT9p0Y9kzbDmcbvw9Dn23c4Yzrd2H4M667nHX+FnzCWefdzrzvTsFHnHl/I2G45SA/hILbchiKBPkRCwFQskFTNYxt/aP1h9MQLay8xyxyExC33HQAKzy/YFAc3X4beYWCfe2dsQz6tJF20HMCtSGm/SkFrr7ZhIiI97MexEuPwwdhHvThKchAYUv2G3Aq2MD/Xgjzw0ziK3aB2mjaCgbMGTXGgdOPeKyDzg/1D/AJWIaKdKPg4WdaxCIcizfzdgMzgg90iyoQafm5Hl0ZsLRo6JdqDV8jHh9RyICrfVx00AiRZ7xHLwgjv3P+L8JoY1IPlXmIgGNuBqmnvg3zq9MpoBSuc/1sr7ARziF1G7+QPBy0hPRG7KMLd1suivvEhEu0r7/5X4TRROOyIQ/MkVyb/N1KoATzaOJxVzoVAx6YcKTLvUn0D+iAUuyP/mTmcMOStqMLAcV2JoTu2NIyuDOb+Md/awGUYbUb+ePJ9DJbe3esZ5fpdeyPdoN1UnzxxRdffPHFF19k8D8XTgFxeA+RogAAAABJRU5ErkJggg==",
    (error, image) => {
      if (error) throw error;

      // Add the image to the map style.
      map.addImage("cat", image);

      // Add a data source containing one point feature.
      map.addSource("point", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: listing.geometry.coordinates,
              },
            },
          ],
        },
      });

      // Add a layer to use the image to represent the data.
      map.addLayer({
        id: "points",
        type: "symbol",
        source: "point", // reference the data source
        layout: {
          "icon-image": "cat", // reference the image
          "icon-size": 0.25,
        },
      });
    }
  );
});

map.addControl(new mapboxgl.FullscreenControl());

const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");

for (const input of inputs) {
  input.onclick = (layer) => {
    const layerId = layer.target.id;
    map.setStyle("mapbox://styles/mapbox/" + layerId);
  };
}
