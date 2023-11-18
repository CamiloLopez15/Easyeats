import logoWithoutBackgroundText from "/logo-without-background-text.png";
import { Link } from "react-router-dom";

function Login() {
	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
				<a
					href="#"
					className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
				>
					<img
						className="w-10 h-10 object-contain mr-2"
						src={logoWithoutBackgroundText}
						alt="logo"
					/>
					Easyeats
				</a>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Inicia sesión
						</h1>
						<form className="space-y-4 md:space-y-6" action="#">
							<div>
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Tu correo
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="name@company.com"
									required=""
								/>
							</div>
							<div>
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Contraseña
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required=""
								/>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="remember"
											aria-describedby="remember"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
											required=""
										/>
									</div>
									<div className="ml-3 text-sm">
										<label className="text-gray-500 dark:text-gray-300">
											Recuérdeme
										</label>
									</div>
								</div>
								<a
									href="#"
									className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
								>
									¿Olvidaste tu contraseña?
								</a>
							</div>
							<button
								type="submit"
								className="w-full text-white bg-black hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Inicio de sesión
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								¿No tienes cuenta?{" "}
								<Link
									to="/register"
									className="font-medium text-blue-600 hover:underline dark:text-blue-500"
								>
									Regístrate
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
