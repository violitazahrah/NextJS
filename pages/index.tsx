import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/vio.jpeg" width={200} height={200} alt="profile" />
      <h1 className={styles["title-homepage"]}>Welcome Vio</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste recusandae culpa quasi doloribus hic, labore optio architecto incidunt esse reprehenderit soluta tenetur impedit dolor quibusdam illo voluptatem ad accusantium totam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur ab placeat omnis, doloribus dolorem reprehenderit sequi iusto molestiae cupiditate atque. Iste error molestias dolorum incidunt facilis enim cupiditate quas!
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam expedita libero provident, enim ad, tempora cumque ipsa velit explicabo animi ducimus natus! Natus aut fuga minima pariatur vero inventore.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, dolores.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, expedita! Ullam, quo! In, earum debitis illum officia reiciendis enim deserunt perspiciatis possimus fuga, iusto ab, sapiente nemo accusantium necessitatibus amet.
      </p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, omnis vero distinctio minus assumenda vel ullam libero tenetur quisquam eum modi, sit delectus praesentium aspernatur natus ex sunt ipsam possimus?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, officiis unde ea dolorum accusamus obcaecati tempora, iste enim itaque commodi, eum ullam excepturi magnam deserunt atque! Dignissimos voluptate tempore laudantium.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas adipisci, laudantium aliquid voluptatum iste eius eaque illo id itaque ut quidem necessitatibus quibusdam dolorum incidunt ratione, odit iure asperiores at.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum, in, mollitia nemo id unde officia natus recusandae sunt sequi tenetur non voluptates earum provident est consectetur animi quas nihil.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores minus quaerat, non velit aliquam exercitationem voluptatibus omnis blanditiis vel asperiores natus eveniet, veritatis quod atque voluptate? Tempore consectetur
        perspiciatis expedita.
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque praesentium repudiandae tempora nihil, dicta corrupti autem asperiores, optio, facilis esse maiores aliquid dolores modi quisquam minus omnis unde ad obcaecati.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi ducimus minima. A quos ipsam quis in nobis? Modi, eveniet debitis ipsam quam minima obcaecati dolorum velit excepturi beatae nulla.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in, vero impedit cumque, perferendis, iure facere odit voluptatem beatae modi sunt qui ut natus. Reiciendis fugiat sit illum sapiente aliquam.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, eveniet.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe eos eveniet placeat nostrum excepturi tempore, quis labore quaerat hic asperiores expedita corporis commodi recusandae pariatur voluptatibus sapiente id quam.</p>
    </Layout>
  );
}
